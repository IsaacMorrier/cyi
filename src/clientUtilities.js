export const useData = async (context, route) => {
  try {
    const res = await context.fetch(`${route}.json`);
    const uses = await res.json();
    return uses;
  } catch (e) {
    console.error(e);
  }
};
