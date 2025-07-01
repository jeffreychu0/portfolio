import os
import json
import openai
import time

openai.api_key = os.environ["OPENAI_API_KEY"]
ASSISTANT_ID = os.environ["OPENAI_ASSISTANT_ID"]

def lambda_handler(event, context):
    if event.get("httpMethod", "") == "OPTIONS":
        return {
            "statusCode": 200,
            "headers": {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Methods": "OPTIONS,POST"
            },
            "body": ""
        }
    # Parse messages from the request body
    body = json.loads(event["body"])
    messages = body.get("messages", [])

    # Create a new thread for each chat session (stateless example)
    thread = openai.beta.threads.create()
    thread_id = thread.id

    # Add all user and assistant messages to the thread
    for msg in messages:
        if msg["role"] in ["user", "assistant"]:
            openai.beta.threads.messages.create(
                thread_id=thread_id,
                role=msg["role"],
                content=msg["content"]
            )

    # Run the assistant on the thread
    run = openai.beta.threads.runs.create(
        thread_id=thread_id,
        assistant_id=ASSISTANT_ID
    )

    # Wait for the run to complete (polling)
    while True:
        run_status = openai.beta.threads.runs.retrieve(thread_id=thread_id, run_id=run.id)
        if run_status.status in ["completed", "failed", "cancelled"]:
            break
        time.sleep(1)

    # Get the latest assistant message
    thread_messages = openai.beta.threads.messages.list(thread_id=thread_id)
    assistant_message = next(
        (m for m in reversed(thread_messages.data) if m.role == "assistant"), None
    )

    content = assistant_message.content[0].text.value if assistant_message else "Sorry, I couldn't generate a response."

    return {
        "statusCode": 200,
        "headers": {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",  # Or your domain instead of *
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "OPTIONS,POST"
        },
        "body": json.dumps({"content": content})
    }