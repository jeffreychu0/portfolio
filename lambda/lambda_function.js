const OpenAI = require('openai');
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const corsHeaders = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "OPTIONS,POST",
  "Access-Control-Allow-Headers": "Content-Type,x-api-key,x-thread-id"
};

exports.handler = async (event) => {
  try {
    const requestMethod = event.httpMethod || event.requestContext?.http?.method;

    if (requestMethod === 'OPTIONS') {
      return {
        statusCode: 204,
        headers: corsHeaders,
        body: ''
      };
    }

    let body = event.body;
    if (typeof body === 'string') {
      body = body ? JSON.parse(body) : {};
    } else if (!body || typeof body !== 'object') {
      body = {};
    }

    const input = body.input; // or body.messages, depending on your frontend

    if (!input || typeof input !== 'string') {
      return {
        statusCode: 400,
        headers: corsHeaders,
        body: JSON.stringify({
          content: 'Invalid request payload.',
          response: 'Invalid request payload.'
        })
      };
    }

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
      headers: corsHeaders,
      body: JSON.stringify({ content: cleanedContent, response: cleanedContent, id: thread.id })
    };
  } catch (err) {
    console.error('Error communicating with AI service:', err);
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({
        content: "Sorry, I couldn't reach the AI service.",
        response: "Sorry, I couldn't reach the AI service."
      })
    };
  }
};