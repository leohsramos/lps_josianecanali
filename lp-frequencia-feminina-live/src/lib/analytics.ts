declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export type CtaLocation = 'hero' | 'final';

export function pushWhatsappClick(location: CtaLocation) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'whatsapp_click',
    cta_location: location,
  });
}
