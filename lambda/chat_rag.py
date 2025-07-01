import json

def lambda_handler(event, context):
    # Parse the POST body
    body = json.loads(event['body'])
    messages = body.get('messages', [])
    user_messages = [m for m in messages if m.get('role') == 'user']
    user_message = user_messages[-1]['content'] if user_messages else ''

    # --- RAG logic would go here ---
    # For demo, we just echo the user message and pretend we did retrieval
    retrieved_info = "Here's some info I found related to your question."

    assistant_response = f'You asked: "{user_message}". {retrieved_info}'

    return {
        "statusCode": 200,
        "headers": { "Content-Type": "application/json" },
        "body": json.dumps({
            "role": "assistant",
            "content": assistant_response
        }),
    }