import { StyleSheet, Platform } from "react-native";
import { white, gray, blue } from "../utils/colors";

const allstyles = StyleSheet.create({
    item: {
        backgroundColor: white,
        borderRadius: Platform.OS === "ios" ? 16 : 2,
        padding: 20,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 17,
        justifyContent: "center",
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: "rgba(0, 0, 0, 0.24)",
        shadowOffset: {
          width: 0,
          height: 3
        }
      },
      deckTitle: {
        color: blue,
        fontWeight: "bold",
        fontSize: 20
      },
      cardCount: {
        color: gray,
        fontSize: 16
      },
    button: {
      padding: 15,
      fontSize: 15,
      marginTop: 10,
      borderRadius: 8,
      shadowRadius: 8,
      shadowOpacity: 0.8,
      shadowColor: "rgba(0, 0, 0, 0.24)",
      shadowOffset: {
        width: 0,
        height: 3
      },
      overflow: "hidden"
    },
    textbutton: {
        textAlign: "center",
        color: white
    },
    text: {
        textAlign: "center",
        padding: 10,
        fontSize: 14,
        color: gray
     },
    submitButton: {
      backgroundColor: blue,
      margin: 40,
      padding: 20,
      fontSize: 20
    },
    textinput: {
      padding: 15,
      height: 60,
      marginTop: 20,
      marginLeft: 40,
      marginRight: 40,
      borderColor: blue,
      borderWidth: 1
    },
    card: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: white,
        borderRadius: Platform.OS === "ios" ? 16 : 2,
        padding: 20,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        marginBottom: 20,
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: "rgba(0, 0, 0, 0.24)",
        shadowOffset: {
          width: 0,
          height: 3
        }
      },
      container: {
        flex: 1,
        justifyContent: "center"
      },
      buttonContainer: {
        flex: 1,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: white
      },
      title: {
        fontSize: 20,
        textAlign: "center"
      },
      subtitle: {
        fontSize: 20,
        textAlign: "center",
        color: gray
      },
      addCardButton: {
        backgroundColor: white,
        borderWidth: 1,
        borderColor: gray,
        color: gray
      },
      startQuizButton: {
        borderWidth: 1,
        borderColor: blue,
        backgroundColor: blue
      },
    VQdeckCard: {
        flex: 3,
        justifyContent: "center",
        backgroundColor: white,
        borderRadius: Platform.OS === "ios" ? 16 : 2,
        padding: 20,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        marginBottom: 20,
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: "rgba(0, 0, 0, 0.24)",
        shadowOffset: {
          width: 0,
          height: 3
        },
        backfaceVisibility: "hidden"
      },
      VQdeckCardBack: {
        position: "absolute",
        top: 0
      },
      VQresultsContainer: {
        borderWidth: 1,
        borderRadius: 6,
        borderColor: gray,
        padding: 20,
        margin: 10
      },
      VQresultsTitle: {
        fontSize: 30,
        textAlign: "center",
        color: blue
      },
      VQprogressContainer: {
        justifyContent: "center",
        flexDirection: "row",
        paddingBottom: 20
      },
      VQcontainer: {
        flex: 1,
        justifyContent: "center"
      },
      VQanswerButtonsContainer: {
        flex: 1,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center"
      },
      VQlabel: {
        fontSize: 30,
        color: gray,
        textAlign: "center"
      },
      VQquestion: {
          fontSize: 40,
          textAlign: "center"
      },
      VQanswer: {
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center"
      },
      VQincorrectButton: {
        backgroundColor: white,
        borderWidth: 1,
        borderColor: gray,
        color: gray
      },
      VQcorrectButton: {
        borderWidth: 1,
        borderColor: blue,
        backgroundColor: blue
      },
      NQdeckCard: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: white,
        borderRadius: Platform.OS === "ios" ? 16 : 2,
        padding: 20,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        marginBottom: 20,
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: "rgba(0, 0, 0, 0.24)",
        shadowOffset: {
          width: 0,
          height: 3
        }
      },
      NQtitle: {
        fontSize: 34,
        textAlign: "center"
      },
      cdcontainer: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: white,
        padding: 15
      },
  });

  export default allstyles