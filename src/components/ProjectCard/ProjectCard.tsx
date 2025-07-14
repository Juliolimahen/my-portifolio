import { Grid, Typography, styled } from '@mui/material';
import StyledButton from "../StyledButton/StyledButton";

export interface ProjectCardProps {
    title: string;
    subtitle: string;
    srcImg: string;
    description: string;
    technologies: string;
    websiteURL: string;
    codeURL: string;
}

const StyledCard = styled("div")(({ theme }) => ({
    borderRadius: "8px",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    backgroundColor: "transparent",
    color: theme.palette.primary.contrastText,
    padding: "20px",
    transition: "background-color 0.3s ease",
    '&:hover': {
        backgroundColor: theme.palette.primary.light,
    }
}));

const ImageContainer = styled("div")({
    width: "100%",
    height: "300px", 
    overflow: "hidden",
    borderRadius: "8px",
});

const StyledImg = styled("img")({
    width: "100%",
    height: "100%",
    objectFit: "cover", 
    display: "block",
});

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    subtitle,
    srcImg,
    description,
    technologies,
    websiteURL,
    codeURL
}) => {
    return (
        <StyledCard>
            <Typography variant="h5" fontWeight="bold">
                {title}
            </Typography>
            <Typography variant="subtitle2" pb={1}>
                {subtitle}
            </Typography>
            <ImageContainer>
                <StyledImg src={srcImg} alt={title} />
            </ImageContainer>
            <Typography pt={2}>
                {description}
            </Typography>
            <Typography fontWeight={600} pt={2}>
                {technologies}
            </Typography>
            <Grid container spacing={1} pt={2}>
                <Grid size={6}>
                    <StyledButton onClick={() => window.open(`https://${websiteURL}`, "_blank")}>
                        View Project
                    </StyledButton>
                </Grid>
                <Grid size={6}>
                    <StyledButton onClick={() => window.open(codeURL, "_blank")}>
                        View Code
                    </StyledButton>
                </Grid>
            </Grid>
        </StyledCard>
    );
}

export default ProjectCard;
