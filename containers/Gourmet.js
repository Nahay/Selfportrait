import { useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import Image from 'next/future/image';
import { Glace150, Glace300, Pho800 } from '../assets/images';
import Info from '../components/Info';
import proportionalStyle from '../utils/ProportionalStyle';

const useStyle = createUseStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        marginTop: '40px',

        '& img:first-child': {
            width: '100%',
            height: '300px',
            order: '2',
        },

        '& img:nth-child(2)': {
            width: 'fit-content',
            height: 'fit-content',
            alignSelf: 'flex-end',
            marginRight: '5%',
            transform: 'translateY(-100px)',
            order: '3',
        },

        '@media (min-width: 600px)': {
            position: 'relative',
            flexDirection: 'row',
            width: 'unset',
            marginRight: '650px',
            marginTop: '0',

            '& img': {
                position: 'absolute',
            },

            '& img:first-child': {
                top: '0',
                marginLeft: '110px',
                zIndex: '0',
                order: 'unset',
                width: 'fit-content',
                height: 'fit-content',
            },

            '& img:nth-child(2)': {
                zIndex: '1',
                bottom: '0',
                right: '-222px',
                order: 'unset',
                marginRight: '0',
                alignSelf: 'unset',
                transform: 'unset',
            },
        },
    },
    text: {
        zIndex: '2',
        order: '1',

        '& h2': {
            fontSize: 'calc(10vw + 12px)',
        },

        '& .info': {
            transform: 'translate(-20px, 360px)',
        },

        '@media (min-width: 600px)': {
            order: 'unset',

            '& h2': {
                fontSize: '150px',
            },
        },
    },
});

const Gourmet = () => {
    const classes = useStyle();

    useEffect(() => {
        // pho
        new proportionalStyle({
            reference: '#gourmet',
            target: '#pho',
            styles: {
                transform: 'translateX(${-coef*100}px)',
            },
        });

        // glace
        new proportionalStyle({
            reference: '#gourmet',
            target: '#ice',
            styles: {
                transform: 'translateX(${coef*50}px)',
            },
        });

        // info
        new proportionalStyle({
            reference: '#gourmet',
            target: '#gourmet .info',
            styles: {
                transform: 'translateX(${coef*100}px)',
            },
        });
    }, []);

    return (
        <section className={classes.container} id="gourmet">
            <Image className="bnw" src={Pho800} alt="Pho" width={800} height={600} id="pho" />
            <Image className="bnw" src={Glace300} alt="Glace" width={300} height={480} id="ice" />
            <div className={classes.text}>
                <h2>GOURMET</h2>
                <Info text="Phô > Couscous > all" />
            </div>
        </section>
    );
};

export default Gourmet;
