import { createUseStyles } from 'react-jss';
import { Dev1, Dev2, Dev3, Dev4 } from '../utils/imagesIndex';
import Image from 'next/future/image';

const useStyle = createUseStyles({
    container: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        height: '500px',

        '& h2': {
            fontSize: 'calc(10vw + 12px)',
        },

        '& img': {
            position: 'absolute',
            boxShadow: 'rgba(0, 0, 0, 0.2) 0px 7px 29px 0px',
        },
        '& img:nth-child(2)': {
            width: '60%',
            height: 'fit-content',
            top: '100px',
            left: '0',
        },
        '& img:nth-child(3)': {
            width: '60%',
            height: 'fit-content',
            top: '220px',
            right: '0',
        },
        '& img:nth-child(4)': {
            width: '60%',
            height: 'fit-content',
            top: '310px',
            left: '0',
        },
        '& img:nth-child(5)': {
            width: '60%',
            height: 'fit-content',
            top: '400px',
            right: '0',
        },

        '@media (min-width: 600px)': {
            width: '2332px',
            height: 'unset',
            display: 'block',

            '& h2': {
                fontSize: '150px',
                position: 'absolute',
                bottom: '10%',
                zIndex: '5',
            },

            '& img:nth-child(2)': {
                top: '10%',
                left: 'unset',
                width: 'unset',
            },
            '& img:nth-child(3)': {
                width: 'unset',
                top: 'unset',
                right: 'unset',
                left: '520px',
                bottom: '10%',
            },
            '& img:nth-child(4)': {
                width: 'unset',
                left: '1000px',
                top: '10%',
            },
            '& img:nth-child(5)': {
                width: 'unset',
                top: 'unset',
                right: 'unset',
                left: '1400px',
                bottom: '10%',
            },
        },
    },
});

const Dev = () => {
    const classes = useStyle();

    return (
        <div className={classes.container} id="dev">
            <h2>DEV</h2>
            <Image className="bnw" src={Dev1} alt="Dev" />
            <Image className="bnw" src={Dev2} alt="Dev" />
            <Image className="bnw" src={Dev3} alt="Dev" />
            <Image className="bnw" src={Dev4} alt="Dev" />
        </div>
    );
};

export default Dev;
