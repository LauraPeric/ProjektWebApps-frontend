<template>
  <div>
    <FullCalendar :plugins="calendarPlugins" :events="events" />
  </div>
</template>

<script>
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";

export default {
  components: {
    FullCalendar,
  },
  data() {
    return {
      calendarPlugins: [dayGridPlugin],
      events: [
        // Vaši događaji/kalendar unosi
        {
          title: "Sastanak",
          start: "2024-01-25T10:00:00",
          end: "2024-01-25T12:00:00",
        },
        {
          title: "Ručak",
          start: "2024-01-25T12:30:00",
          end: "2024-01-25T13:30:00",
        },
        // Dodajte ostale događaje
      ],
    };
  },
};
</script>
