import React from "react";
import { StackNavigator } from "react-navigation";

import JobsIndex from "../../views/jobs/containers/JobsIndexContainer";
import JobsDetail from "../../views/jobs/containers/JobsDetailContainer";

const JobNavigation = StackNavigator({
  JobsIndex: {
    screen: JobsIndex,
    navigationOptions: {
      title: "Jobs Index"
    }
  },
  JobsDetail: {
    screen: JobsDetail,
  },
});

export default JobNavigation;
