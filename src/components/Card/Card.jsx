import styles from "./Card.module.css";
import { Card, CardActions, CardContent, Button, Typography } from "@mui/material"
import LogoReact from "./logo.svg";

const CardProfile = (props) => {
    const {title, bio, textButton} = props;
    return (
        <Card style={{ width: "400px" }} className={styles.card}>
            <CardContent>
                <img src={LogoReact}/>
                <Typography variant="h1">{title}</Typography>
                <Typography variant="body1">{bio}</Typography>
                <CardActions>
                    <Button variant="contained">{textButton}</Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default CardProfile;