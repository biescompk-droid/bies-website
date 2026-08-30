// Shared helper — every "content" page (Academic Calendar, Uniform, Scholarships,
// Fee Structure, Faculty, Activities/Gallery, and the various Documents categories)
// pulls its live data from ecampus.bies.com.pk's public API, managed by staff via
// the Website Content Manager on ecampus. Nothing here is hardcoded content.
const ECAMPUS_BASE = "https://ecampus.bies.com.pk";

export async function getApi(kind, extraParams) {
  const qs = new URLSearchParams({ kind, ...(extraParams || {}) });
  try {
    const res = await fetch(`${ECAMPUS_BASE}/api/admin?${qs.toString()}`, {
      cache: "no-store",
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}
