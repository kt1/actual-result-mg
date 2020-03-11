import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        overflow: "auto"
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});
export default function SiteRecordCard(index, res) {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>{res.site_date_at}</Typography>
                <Typography className={classes.pos} color="textSecondary">{res.site_name}</Typography>
            </CardContent>
        </Card>
    )
}