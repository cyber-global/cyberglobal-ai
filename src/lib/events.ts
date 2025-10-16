// Lightweight event tracking utility

interface EventProps {
  [key: string]: string | number | boolean | undefined;
}

export async function track(eventName: string, props?: EventProps) {
  const isDev = process.env.NODE_ENV === "development";
  
  // Always log to console in development
  if (isDev) {
    console.log(`[Event] ${eventName}`, props);
  }

  // Send to API endpoint
  try {
    await fetch("/api/event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        event: eventName,
        props: props || {},
        timestamp: new Date().toISOString(),
        url: typeof window !== "undefined" ? window.location.href : "",
        referrer: typeof document !== "undefined" ? document.referrer : "",
      }),
    });
  } catch (error) {
    // Silently fail - don't break user experience
    if (isDev) {
      console.error("[Event] Failed to track:", error);
    }
  }
}

// Convenience functions for common events
export const events = {
  ctaClick: (location: string, label: string) => 
    track("cta_click", { location, label }),
  
  formSubmit: (formName: string) => 
    track("form_submit", { form: formName }),
  
  pageView: (pageName: string) => 
    track("page_view", { page: pageName }),
  
  linkClick: (destination: string, label: string) => 
    track("link_click", { destination, label }),
  
  calBooking: (status: "scheduled" | "closed") => 
    track("cal_booking", { status }),
};

