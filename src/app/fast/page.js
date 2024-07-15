import { Suspense } from "react";
import { SlowComponent } from "@/components/SlowComponent";

export default function FastPage() {
  return (
    <div>
      <h2>Fast Page</h2>
      <Suspense fallback={<p>Loading...</p>}>
        <SlowComponent />
      </Suspense>
    </div>
  );
}
