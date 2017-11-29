import React, { Component } from "react";
// import CodePush from "react-native-code-push";
import { View, Text, StyleSheet } from "react-native";
import { connect } from 'react-redux'
import Login from './views/auth/containers'
import { SignedOut, SignedIn } from './config/routers/router'
// import Modal from "react-native-modalbox";
// import MainStackRouter from "./config/routers/MainStackRouter";
// import ProgressBar from "./components/loaders/ProgressBar";
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     width: null,
//     height: null
//   },
//   modal: {
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   modal1: {
//     height: 300
//   }
// });
//
// class App extends Component {
//   constructor(props) {
//     super(props);
//     // this.state = {
//     //   showDownloadingModal: false,
//     //   showInstalling: false,
//     //   downloadProgress: 0
//     // };
//   }
//
//   // componentDidMount() {
//   //   CodePush.sync(
//   //     { updateDialog: true, installMode: CodePush.InstallMode.IMMEDIATE },
//   //     status => {
//   //       switch (status) {
//   //         case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
//   //           this.setState({ showDownloadingModal: true });
//   //           this._modal.open();
//   //           break;
//   //         case CodePush.SyncStatus.INSTALLING_UPDATE:
//   //           this.setState({ showInstalling: true });
//   //           break;
//   //         case CodePush.SyncStatus.UPDATE_INSTALLED:
//   //           this._modal.close();
//   //           this.setState({ showDownloadingModal: false });
//   //           break;
//   //         default:
//   //           break;
//   //       }
//   //     },
//   //     ({ receivedBytes, totalBytes }) => {
//   //       this.setState({ downloadProgress: receivedBytes / totalBytes * 100 });
//   //     }
//   //   );
//   // }
//
//   render() {
//     // if (this.state.showDownloadingModal) {
//     //   return (
//     //     <View>
//     //         <Modal
//     //           style={[styles.modal, styles.modal1]}
//     //           backdrop={false}
//     //           ref={c => {
//     //             this._modal = c;
//     //           }}
//     //           swipeToClose={false}
//     //         >
//     //           <View
//     //             style={{
//     //               flex: 1,
//     //               alignSelf: "stretch",
//     //               justifyContent: "center",
//     //               padding: 20
//     //             }}
//     //           >
//     //             {this.state.showInstalling
//     //               ? <Text
//     //                   style={{
//     //                     color: theme.brandPrimary,
//     //                     textAlign: "center",
//     //                     marginBottom: 15,
//     //                     fontSize: 15
//     //                   }}
//     //                 >
//     //                   Installing update...
//     //                 </Text>
//     //               : <View
//     //                   style={{
//     //                     flex: 1,
//     //                     alignSelf: "stretch",
//     //                     justifyContent: "center",
//     //                     padding: 20
//     //                   }}
//     //                 >
//     //                   <Text
//     //                     style={{
//     //                       color: theme.brandPrimary,
//     //                       textAlign: "center",
//     //                       marginBottom: 15,
//     //                       fontSize: 15
//     //                     }}
//     //                   >
//     //                     Downloading update...
//     //                     {" "}
//     //                     {`${parseInt(this.state.downloadProgress, 10)} %`}
//     //                   </Text>
//     //                 </View>}
//     //               </View>
//     //           </Modal>
//     //         </View>
//     //   );
//     // }
    class Index extends React.Component {
      render = () => (
        this.props.authenticated
        ?
        <SignedIn />
        :
        <SignedOut />
        )
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    });

    // container

  const mapStateToProps = (state, ownProps) => {
    return {
      authenticated: state.auth.authenticated
    }
  }
  const IndexContainer = connect(
    mapStateToProps
  )(Index)

export default IndexContainer
