import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  accordion: {
    display: "flex",
    flexDirection: "column",
    gap: "1em",

    padding: ".5em",
    background: "rgba(0,0,0,.15)",
    borderRadius: "5px"
  },
  card: {
    padding: ".5em",
    borderRadius: "5px",
    background: "rgba(0,0,0,.65)"
  },
  titleContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  title: {
    color: "rgba(255,255,255,.85)",
    fontSize: "1.2rem",
    textTransform: "uppercase"
  },
  desc: {
    color: "rgba(255,255,255,.5)",
    fontSize: "1rem"
  },
  expandBtn: {
    fontSize: "1.5rem",
    color: "rgba(255,255,255,.7)",
    cursor: "pointer"
  }
});
