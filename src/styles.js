import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  gridRoot: { flexGrow: 1 },
  columnBox: {
    display: "flex",
    flexDirection: "column"
  },
  rowBox: {
    display: "flex",
    flexDirection: "row"
  },
  paper: {
    margin: theme.spacing(3),
    padding: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "solid 0.5px",
    borderRadius: 10,
    borderColor: "#d3d3d3"
  },
  form: {
    width: "100%"
  },
  userProfile: {
    paddingLeft: theme.spacing(0.5),
    paddingRight: theme.spacing(1.5),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    border: "solid #d3d3d3",
    borderRadius: 30
  },
  smallAvatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    margin: theme.spacing(1)
  },
  dateButton: {
    minWidth: "0px"
  }
}));

export default useStyles;
