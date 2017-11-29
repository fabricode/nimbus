export default mrr = {
  job_type: "mrr",
  job_title: "Maryland Risk Reduction",
  job_state: {
    certificate_number: null,
    onsite_complete: false,
    interior_paint_satisfactory: false,
    exterior_paint_satisfactory: false,
    sample_tracking_number: null,
    rooms: [],
    room_schema: {
      number: 0,
      lead_free_windows: 0,
      non_lead_free_windows: 0,
      floor: {
        sample_number: null,
        area: {
          width: null,
          length: null
        },
        result: null
      },
      sill: {
        sample_number: null,
        area: {
          width: null,
          length: null
        },
        result: null
      },
      well: {
        sample_number: null,
        area: {
          width: null,
          length: null
        },
        result: null
      }
    }
  },
  process: [
    {
      process_title: "Job Setup",
      fields: [
        {
          label: "Cerificate Number",
          field: "certificate_number",
          field_type: "number"
        },
        {
          label: "Number of Rooms",
          field: "number_of_rooms",
          field_type: "number"
        },
      ],
      submit: {
        state_change: (state) => {
          let rooms = []
          for (var i = state.rooms.length; i < state.number_of_rooms; i++) {
            rooms.push[{...state.rooms_schema, room_number: i}]
          }
          return {...state, rooms}
        }
      }
    },
    {
      process_title: "Add Rooms",
      process_type: "iterative",
    },
    {
      process_title: "Inspect Rooms",
      process_type: "iterative",
    },
    {
      process_title: "Job Closeout",
      fields: [
        {
          label: "Onsite Complete",
          field: "onsite_complete",
          field_type: "toggle"
        },
        {
          label: "Interior Paint Satisfactory",
          field: "interior_paint_satisfactory",
          field_type: "toggle"
        },
        {
          label: "Exterior Paint Satisfactory",
          field: "exterior_paint_satisfactory",
          field_type: "toggle"
        },
        {
          label: "Sample Tracking Number",
          field: "sample_tracking_number",
          field_type: "tracking_number"
        }
      ],
    },
  ],
}
