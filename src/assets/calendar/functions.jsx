import { format } from "date-fns";

export const highDemands = [

  {
    startDate: new Date(2024, 0, 1),
    endDate: new Date(2024, 3, 15),
    key: "selection",
    disabled: true,
    showDateDisplay: false,
  },
 
];

export const lowDemands = [
 
];

export const offerts = [];

export function getDatesInRange(startDate, endDate) {
  const date = new Date(startDate.getTime());

  const dates = [];

  while (date <= endDate) {
    dates.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

  return dates;
}

export function getLowDemand(state) {
  let count = 0;
  const selectedDates = getDatesInRange(state[0].startDate, state[0].endDate);
  selectedDates.forEach((sd) => {
    lowDemands.forEach((lds) => {
      const lowDemands = getDatesInRange(lds.startDate, lds.endDate);
      lowDemands.forEach((ld) => {
        if (
          sd.getFullYear() === ld.getFullYear() &&
          sd.getMonth() === ld.getMonth() &&
          sd.getDate() === ld.getDate()
        ) {
          count += 1;
        }
      });
    });
  });

  if (count === 0) {
    return 0;
  }
  return count - 1;
}

export function getSelectedNights(state) {
  const days =
    (state[0].endDate.getTime() - state[0].startDate.getTime()) /
    (1000 * 3600 * 24);
  return days;
}

export function getNormalDay(state) {
  const days =
    getSelectedNights(state) - (getLowDemand(state) + getHighDemand(state));
  return days;
}

export function getHighDemand(state) {
  let count = 0;
  const selectedDates = getDatesInRange(state[0].startDate, state[0].endDate);
  selectedDates.forEach((sd) => {
    highDemands.forEach((lds) => {
      const highDemands = getDatesInRange(lds.startDate, lds.endDate);
      highDemands.forEach((ld) => {
        if (
          sd.getFullYear() === ld.getFullYear() &&
          sd.getMonth() === ld.getMonth() &&
          sd.getDate() === ld.getDate()
        ) {
          count += 1;
        }
      });
    });
  });

  if (count === 0) {
    return 0;
  }
  return count - 1;
}

export function customDayContent(day) {
  let extraDot = null;

  offerts.forEach((b) => {
    const dates = getDatesInRange(b.startDate, b.endDate);
    dates.forEach((d) => {
      if (
        day.getFullYear() === d.getFullYear() &&
        day.getMonth() === d.getMonth() &&
        day.getDate() === d.getDate()
      ) {
        extraDot = (
          <div
            style={{
              height: "6px",
              width: "6px",
              borderRadius: "100%",
              background: "#00D4C1",
              position: "absolute",
              top: 2,
              right: 2,
            }}
          />
        );
      }
    });
  });

  highDemands.forEach((b) => {
    const dates = getDatesInRange(b.startDate, b.endDate);
    dates.forEach((d) => {
      if (
        day.getFullYear() === d.getFullYear() &&
        day.getMonth() === d.getMonth() &&
        day.getDate() === d.getDate()
      ) {
        extraDot = (
          <div
            style={{
              height: "8px",
              width: "8px",
              borderRadius: "100%",
              background: "orange",
              position: "absolute",
              top: 2,
              right: 2,
            }}
          />
        );
      }
    });
  });

  lowDemands.forEach((b) => {
    const dates = getDatesInRange(b.startDate, b.endDate);
    dates.forEach((d) => {
      if (
        day.getFullYear() === d.getFullYear() &&
        day.getMonth() === d.getMonth() &&
        day.getDate() === d.getDate()
      ) {
        extraDot = (
          <div
            style={{
              height: "6px",
              width: "6px",
              borderRadius: "100%",
              background: "yellow",
              position: "absolute",
              top: 2,
              right: 2,
            }}
          />
        );
      }
    });
  });

  return (
    <div>
      {extraDot}
      <span>{format(day, "d")}</span>
    </div>
  );
}
