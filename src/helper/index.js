import { GoogleGenerativeAI } from "@google/generative-ai";

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const ai = new GoogleGenerativeAI(GEMINI_API_KEY);

export const generateContent = async (userQuery) => {
  const prompt = promptGenerator(userQuery);
  const model = ai.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log("Generated content:", text);
    return text;
  } catch (error) {
    console.error("Error generating content:", error);
    throw new Error("Failed to generate content from Gemini API");
  }
};

export const promptGenerator = (userQuery) => {
  return `Create a simple React functional component based on this description: ${userQuery}
        
    Requirements:
    - Use React.createElement instead of JSX syntax 20
    - Keep it simple, no imports needed
    - Name the function 'Generated Component'
    - Use inline styles as regular JavaScript objects
    - Don't use any JSX syntax, use React.createElement instead
    - Don't include any markdown or code block syntax
    - Don't include any export statements
    
    Example format:
     function GeneratedComponent() {
        return React.createElement(
         'div',
          { style: { padding: 10px } },
          React.createElement(
            'button',
              {
                style: {
                        backgroundColor: 'blue',
                        color: 'white',
                        padding: '10px'
                        },
                        onclick: () => alert('Clicked!')
              },
              'Click me'
            )
          );
  }
          
          Return only the component code without any markdown fomatting or code block syntax.`;
};
