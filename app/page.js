"use client"
import Button from "@/components/ui/button";


export default function Home() {
  return (
    <div>
      <main>
        <div className="flex gap-20 mt-30 justify-center">
          <div onClick={()=>{
            
          }}>
            <Button title="Create" />
          </div>
          <div>
            <Button title="Join" />
          </div>
        </div>
      </main>
    </div>
  );
}
