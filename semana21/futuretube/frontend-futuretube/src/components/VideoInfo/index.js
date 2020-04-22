import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import styled from 'styled-components';

const FooterCard = styled.div`
  margin-bottom: 12px;
`

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100vw"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function VideoInfo(props) {
  const classes = useStyles();

  return (
    <FooterCard>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
                    </Avatar> // TODO inserir primeira letra do nome do usuário
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.title}
        nameUser="Usuario" // TODO mostrar nome do usuário
      />
    </FooterCard>
  );
}

export default VideoInfo;