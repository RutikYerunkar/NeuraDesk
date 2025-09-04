import { openai } from "@ai-sdk/openai";
import { RAG } from "@convex-dev/rag";
import { components } from "../../_generated/api";

// import { createOpenAICompatible } from '@ai-sdk/openai-compatible';
// const gateway = createOpenAICompatible({...});
// textEmbeddingModel: gateway.textEmbeddingModel("text-embedding-3-small"),

const embeddingModel = openai.embedding("text-embedding-3-small");

const rag = new RAG(components.rag, {
  embeddingDimension: 1536,
  textEmbeddingModel: embeddingModel as any,
});

export default rag;

// import { createOpenAICompatible } from '@ai-sdk/openai-compatible';
// import { RAG } from "@convex-dev/rag";
// import { components } from "../../_generated/api";

// // Create a gateway for OpenAI-Compatible (replaces the "openai" import for embeddings)
// const openaiGateway = createOpenAICompatible({
//   // Optionally specify your endpoint, API key, etc.
//   // See documentation for configuration options if needed
//   // apiKey: process.env.OPENAI_API_KEY
//   baseURL: "https://api.openai.com/v1",
//   name: "openai",
//   apiKey: process.env.OPENAI_API_KEY as string,
// });

// const rag = new RAG(components.rag, {
//   textEmbeddingModel: openaiGateway.textEmbeddingModel("text-embedding-3-small"),
//   embeddingDimension: 1536,
// });

// export default rag;
