export const scrollToElementById = (id: string) => {
  if (typeof document === "undefined") return;

  const element = document.getElementById(id);
  if (!element) return;

  element.scrollIntoView({ behavior: "smooth" });
};



