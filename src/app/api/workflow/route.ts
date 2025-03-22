// app/api/workflow/route.ts
import { NextRequest } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Google AI with correct API version
const googleAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY || '');

export async function POST(req: NextRequest): Promise<Response> {
  try {
    const formData = await req.formData();
    const workflow = formData.get('workflow') as string | null;
    
    if (!workflow) {
      return Response.json({ error: 'workflow is required' }, { status: 400 });
    }

    const prompt = `
      Given the following claim processing workflow: "${workflow}"
      Optimize this workflow to make it faster and more efficient.
      Provide the result as a valid BPMN 2.0 XML representation.
      Include appropriate <process>, <startEvent>, <task>, <gateway>, <sequenceFlow>, and <endEvent> elements.
      Ensure the XML is syntactically correct for rendering with bpmn-js.
      Return only the BPMN 2.0 XML without additional explanation.
    `;

    // Use the latest model name
    const model = googleAI.getGenerativeModel({ 
      model: 'gemini-1.5-pro'  // Updated model name
    });
    
    const result = await model.generateContent(prompt);
    const response = result.response;
    const bpmnXml = response.text();

    return Response.json({
      exists: true,
      message: 'Claim processing workflow optimized successfully',
      bpmn: bpmnXml,
    });
  } catch (error: any) {
    console.error('Error in POST handler:', error);
    return Response.json({ 
      error: error.message 
    }, { status: 500 });
  }
}