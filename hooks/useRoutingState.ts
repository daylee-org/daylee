import Router, { useRouter } from 'next/router';

interface Param {
  year?: number | null;
  month?: number | null;
  week?: number | null;
}

export function useRoutingState() {
  const { query } = useRouter();

  function set(params: Param) {
    Router.replace({
      query: { ...params },
    });
  }

  return {
    set,
    get: {
      year: getNumberValue(query.year),
      week: getNumberValue(query.week),
      month: getNumberValue(query.month),
    },
  };

  function getNumberValue(thing: any) {
    return Number.isNaN(Number(thing))
      ? null
      : Number(thing);
  }
}
