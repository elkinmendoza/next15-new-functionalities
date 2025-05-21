import { Product } from "@/components/product";
import { Reviews } from "@/components/reviews";
import { Suspense } from "react";

export default async function ProductReviewsPage() {
  return (
    <div>
      <p>
        This is a demo app to showcase the new features of Next.js 13.4. It
        includes a dashboard and an about page. The dashboard page is a client
        component that uses React hooks to manage state.
        {new Date().toLocaleTimeString()}
      </p>
      <Suspense fallback={<p>Loading product...</p>}>
        <Product />
      </Suspense>
      <Suspense fallback={<p>Loading reviews...</p>}>
        <Reviews />
      </Suspense>
    </div>
  );
}
