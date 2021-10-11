import moment from 'moment';
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

  function setToday() {
    set({
      week:
        moment().weeks() -
        moment().startOf('month').weeks() +
        1,
      month: moment().month(),
      year: moment().year(),
    });
  }

  return {
    set,
    setToday,
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
