import React from 'react';
import SiteRecordCard from './SiteRecordCard'

export default function SiteRecordList(data) {

    console.log(data)
    return (
        data.map((index, row) =>
            <SiteRecordCard key={index} data={row} />
        )
    )

    // return (
    //     <div>
    //         <Card className={classes.root} variant="outlined">
    //             <CardContent>
    //                 <Typography className={classes.title} color="textSecondary" gutterBottom>日付1</Typography>
    //                 <Typography className={classes.pos} color="textSecondary">時間</Typography>
    //             </CardContent>
    //         </Card>
    //         <Card className={classes.root} variant="outlined">
    //             <CardContent>
    //                 <Typography className={classes.title} color="textSecondary" gutterBottom>日付1</Typography>
    //                 <Typography className={classes.pos} color="textSecondary">時間</Typography>
    //             </CardContent>
    //         </Card>
    //         <Card className={classes.root} variant="outlined">
    //             <CardContent>
    //                 <Typography className={classes.title} color="textSecondary" gutterBottom>日付1</Typography>
    //                 <Typography className={classes.pos} color="textSecondary">時間</Typography>
    //             </CardContent>
    //         </Card>
    //         <Card className={classes.root} variant="outlined">
    //             <CardContent>
    //                 <Typography className={classes.title} color="textSecondary" gutterBottom>日付1</Typography>
    //                 <Typography className={classes.pos} color="textSecondary">時間</Typography>
    //             </CardContent>
    //         </Card>
    //         <Card className={classes.root} variant="outlined">
    //             <CardContent>
    //                 <Typography className={classes.title} color="textSecondary" gutterBottom>日付1</Typography>
    //                 <Typography className={classes.pos} color="textSecondary">時間</Typography>
    //             </CardContent>
    //         </Card>
    //     </div>
    // )
}