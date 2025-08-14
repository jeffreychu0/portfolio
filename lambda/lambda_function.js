const OpenAI = require('openai');
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body);
    const input = body.input; // or body.messages, depending on your frontend

    // Create a new thread
    const thread = await openai.beta.threads.create();

    // Add the user message to the thread
    await openai.beta.threads.messages.create(thread.id, {
      role: 'user',
      content: input
    });

    // Run the assistant and poll for completion
    const run = await openai.beta.threads.runs.createAndPoll(
      thread.id,
      { assistant_id: process.env.OPENAI_ASSISTANT_ID }
    );

    // Get the latest assistant message
    let cleanedContent = "Sorry, I couldn't generate a response.";
    if (run.status === 'completed') {
      const messagesResponse = await openai.beta.threads.messages.list(thread.id);
      const assistantMessage = messagesResponse.data
        .slice()
        .reverse()
        .find(m => m.role === "assistant");

      if (assistantMessage) {
        cleanedContent = assistantMessage.content[0].text.value.replace(/【[^】]*】/g, '').trim();
      }
    }

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ content: cleanedContent })
    };
  } catch (err) {
    console.error('Error communicating with AI service:', err);
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ content: "Sorry, I couldn't reach the AI service." })
    };
  }
};