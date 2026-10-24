const IMAGE_BASE_URL = process.env.NEXT_PUBLIC_IMAGE_BASE_URL ?? "";

export function getImageUrl(path: string): string {
  if (!path) return "";
  return `${IMAGE_BASE_URL.replace(/\/+$/, "")}/${path.replace(/^\/+/, "")}`;
}
