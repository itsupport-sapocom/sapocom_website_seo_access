export function generateSlug(title) {
  let slug = title.toLowerCase().replace(/\s+/g, "-");

  const randomNumber = Math.floor(Math.random() * 900000) + 100000;

  slug += `-${randomNumber}`;

  return slug;
}
