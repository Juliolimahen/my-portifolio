import { Box, Container, Grid, Typography, styled } from "@mui/material";
import ProjectCard, { type ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const ProjectsSection: React.FC = () => {

    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,

    }));

    const projects = [
        {
            title: "DS Delivery",
            subtitle: "Jul 2021 - Dez 2024",
            srcImg: "/src/assets/images/ds-delivery.png",
            description: "O projeto consiste em um sistema de registro e entrega de pedidos. Onde desenvolvemos uma aplicação WEB para realização dos pedidos e um apliacativo movel para acompanhamento dos entrgadores.",
            technologies: "Technologies: HTML, CSS, Java, Typescript, React-native, Spring-boot, Csharp,  Dotnet , Api-rest",
            websiteURL: "juliohensds2.netlify.app/",
            codeURL: "https://github.com/Juliolimahen/dsdeliver-sds2",
        },
        {
            title: "E-Diaristas",
            subtitle: "Jul 2022 - Dez 2022",
            srcImg: "/src/assets/images/e-diaristas.png",
            description: "Aplicação para contratação de diaristas. Foi desenvolvido um sistema Web para listagem e contratação das diaristas (React + Next JS), um aplicativo movel para o mesmo fim e um sistema administrativo para cadastro das diaristas.",
            technologies: "Technologies: JavaScript, HTML, CSS, Php, Laravel, React-native, Reactjs",
            websiteURL: "https://github.com/Juliolimahen/e-diaristas",
            codeURL: "https://github.com/Juliolimahen/e-diaristas",
        },
        {
            title: "Adote um Pet",
            subtitle: "Ago 2022 - Dez 2022",
            srcImg: "/src/assets/images/adote-um-pet.png",
            description: "Projeto Adote um Pet. Projeto para adoção virtual de pets, voce escolhe seu pet faz uma doação para ajudar a o manter.",
            technologies: "Technologies: JavaScript, HTML, CSS, React JS, Next JS, Java, Spring Boot",
            websiteURL: "adote-um-pet-nine.vercel.app",
            codeURL: "https://github.com/Juliolimahen/adote-um-pet",
        },
        {
            title: "Called Management",
            subtitle: "May 2021 -  Jul 2021",
            srcImg: "/src/assets/images/called-management.png",
            description: "Sistema para organização de chamados abertos desenvolvido durante o desafio Smartbreeder Academy Coding 2.0.",
            technologies: "Technologies: C#, Net Framework, WinForms, SQL Server, git, Dados, SQL, Trello ",
            websiteURL: "https://github.com/Juliolimahen/academy-coding-2",
            codeURL: "https://github.com/Juliolimahen/academy-coding-2",
        },
        {
            title: "Alura Formação csharp",
            subtitle: "May 2022 -  Dez 2023",
            srcImg: "/src/assets/images/formacao-csharp.png",
            description: "Este repositório contém as atividades e projetos desenvolvidos ao longo da formação CSharp oferecida pela Alura. Cada pasta representa um módulo ou projeto específico abordado durante o curso, com foco em diferentes aspectos e aplicações do C#.",
            technologies: "Technologies: C# Frameworks: .NET, ASP.NET, Entity Framework, Banco de Dados: SQL Server, MySql, MongoDb, Ferramentas: Visual Studio, Git",
            websiteURL: "https://github.com/Juliolimahen/alura-formacao-csharp",
            codeURL: "https://github.com/Juliolimahen/alura-formacao-csharp",
        },
         {
            title: "DS Vendas",
            subtitle: "Mar 2021 -  Mar 2021",
            srcImg: "/src/assets/images/ds-vendas.png",
            description: "O projeto consiste em um sistema de vendas com Dashboard. Foram utilizadas as seguintes tecnologias: Java com Spring Boot no back-end e React com TypeScript no front-end. OBS. Os dados (gráficos) podem demorar alguns segundos para carregar, visto que a hospedagem do backend é um plano gratuito que hiberna depois de 30 min sem requisições.",
            technologies: "Technologies: React, Javascript, Java, Typescript, Spring-boot",
            websiteURL: "juliohensds3.netlify.app/",
            codeURL: "https://github.com/Juliolimahen/projeto-sds3",
        },
    ]

    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="projects" pt={5} pb={3}>
                    <Typography variant="h2" textAlign="center" color="primary.contrastText">Projects</Typography>
                </Box>
                <Grid container spacing={5} pb={3}>
                    {projects.map((project: ProjectCardProps, index: number) => (
                        <Grid size={{ md: 6 }} key={index}>
                            <AnimationComponent moveDirection={index % 2 == 0 ? "right" : "left"}>
                                <ProjectCard
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    srcImg={project.srcImg}
                                    description={project.description}
                                    technologies={project.technologies}
                                    websiteURL={project.websiteURL}
                                    codeURL={project.codeURL}
                                />
                            </AnimationComponent>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledExperience>
    )
}

export default ProjectsSection