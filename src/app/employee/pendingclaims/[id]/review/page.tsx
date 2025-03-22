"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import BpmnViewer from "bpmn-js/lib/NavigatedViewer";

export default function ClaimWorkflow() {
  const [userInput, setUserInput] = useState("");
  const [bpmnXML, setBpmnXML] = useState("");
  const router = useRouter();

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    
    // Send input to OpenAI API for optimization
    const response = await fetch("/api/optimize-workflow", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input: userInput }),
    });
    
    const data = await response.json();
    if (data.bpmn) {
      setBpmnXML(data.bpmn); // Store BPMN XML
      renderBpmnDiagram(data.bpmn); // Render BPMN
    }
  };

  const renderBpmnDiagram = (xml:any) => {
    const viewer = new BpmnViewer({ container: "#bpmn-container" });
    viewer.importXML(xml);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Insurance Claim Workflow</h1>
      <form onSubmit={handleSubmit} className="my-4">
        <textarea
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Describe the insurance claim process..."
          className="border p-2 text-white w-full"
          rows={5}
        />
        <button type="submit" onClick={handleSubmit} className="mt-2 px-4 py-2 bg-blue-500 text-white">Generate Workflow</button>
      </form>
      <div id="bpmn-container" className="w-full h-[500px] border"></div>
    </div>
  );
}
