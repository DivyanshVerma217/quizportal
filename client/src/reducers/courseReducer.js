export const courseUserReducer = (state = {}, action) => {
    switch (action.type) {
      case "NEW_COURSE_REQUEST":
        return {
          loading: true,
          ...state
        };
      case "NEW_COURSE_SUCCESS":
        return {
          loading: false,
          success: true,
        };
      case "NEW_COURSE_FAILED":
        return {
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };

  export const deleteCourseReducer = (state = {}, action) => {
    switch (action.type) {
        case "DELETE_COURSE_REQUEST": return {
            loading: true
        }

        case "DELETE_COURSE_SUCCESS": return {
            ...state,
            loading: false,
            sucess: true,
            courses: action.payload
        }

        case "DELETE_COURSE_FAILED": return {
            ...state,
            loading: false,
            error: action.payload
        }

        default: return state
    }
}