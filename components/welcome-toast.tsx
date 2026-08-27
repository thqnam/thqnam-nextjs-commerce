"use client";

import { useEffect } from "react";
import { toast } from "sonner";

export function WelcomeToast() {
  useEffect(() => {
    // ignore if screen height is too small
    if (window.innerHeight < 650) return;
    if (!document.cookie.includes("welcome-toast=2")) {
      toast("🛍️ Welcome to Next.js Commerce!", {
        id: "welcome-toast",
        duration: Infinity,
        onDismiss: () => {
          document.cookie = "welcome-toast=2; max-age=31536000; path=/";
        },
        description: (
          <>
            Hi, i'm Thiều Huỳnh Quang Nam of THQNAM Enterprise, i make this site
            by Shopify, Next.js, and Vercel.{" "}
            <a
              href="https://thqnam-myself.vercel.app/"
              className="text-blue-600 hover:underline"
              target="_blank"
            >
              All about me here
            </a>
            .
          </>
        ),
      });
    }
  }, []);

  return null;
}
