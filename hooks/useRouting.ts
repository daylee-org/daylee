import Router, { useRouter } from 'next/router';

interface Param {
  year?: number | null;
  month?: number | null;
  week?: number | null;
}

export function useRouting() {
  const { query } = useRouter();

  function set(params: Param) {
    Router.push({
      query: { ...params },
    });
  }

  return {
    set,
    get: {
      year: query.year,
      week: query.week,
      month: query.month,
    },
  };
}
