// ASSETS
import './Projects.css'

// COMPONENTS
import Title from '../Title/Title'
import ProjectItem from '../ProjectItem/ProjectItem'

// IMAGE
import sales_dashboard from '../../../public/sales_dashboard.png'
import task_list from '../../../public/task_list.png'
import responsive_blog from '../../../public/responsive_blog.png'
import task_manager from '../../../public/task_manager.png'
import landing_page from '../../../public/landing_page.png'

function Projects () {

    return (
        <>
            <Title title='Projetos' position='right'/>
            <div className=' projects d-grid'>
                <ProjectItem
                    image={sales_dashboard}
                    title='Dashboard de Vendas'
                    link='https://dnc-sales-dashboard-gsd-green.vercel.app/home'
                    tags={['Typescript']}>
                    Sistema web completo com autenticação, desenvolvido em TypeScript. Após o login, 
                    o usuário acessa um dashboard de vendas com diversas informações relevantes em 
                    gráficos e listas. 
                    <br /> <br />
                    O sistema inclui página para cadastro e listagem de leads, tema claro e escuro 
                    com alternância dinâmica, interface responsiva e experiência de usuário otimizada.
                </ProjectItem>
                <ProjectItem
                    image={task_list}
                    title='Lista de Tarefas'
                    link='https://lista-tarefas-typescript.netlify.app/'
                    tags={['Typescript', 'CSS']}>
                    Aplicação desenvolvida em TypeScript para gerenciamento de tarefas de forma prática 
                    e visual. Permite adicionar, concluir e remover itens, com contador de progresso no 
                    topo. 
                    <br /> <br />
                    Utiliza armazenamento local e oferece suporte a tema claro e escuro
                </ProjectItem>
                <ProjectItem
                    image={task_manager}
                    title='Gerenciador de Tarefas'
                    link='https://rid220638-desafio03.netlify.app/'
                    tags={['JavaScript', 'CSS', 'HTML']}>
                    Aplicação responsiva para gerenciamento de tarefas com etiquetas de marcação. Permite 
                    adicionar, concluir e acompanhar o progresso com contador de tarefas finalizadas. 
                    <br /> <br />
                    Os dados são armazenados localmente, garantindo persistência mesmo após fechar o navegador.
                </ProjectItem>
                <ProjectItem
                    image={responsive_blog}
                    title='Blog Responsivo'
                    link='https://rid220638-desafio02.netlify.app/'
                    tags={['HTML', 'CSS']}>
                    Projeto de blog responsivo que simula uma página de notícias, com layout totalmente 
                    responsivo. 
                    <br /> <br />
                    Desenvolvido com HTML e CSS, oferece uma experiência de leitura fluia em diferentes 
                    dispositivos, aplicando técnicas como Flexbox e Media Queries.
                </ProjectItem>
                <ProjectItem
                    image={landing_page}
                    title='Landing Page'
                    link='https://rid220638-desafio01.netlify.app/'
                    tags={['HTML', 'CSS']}>
                    Página de captura responsiva com layout moderno e formulário integrado a um serviço 
                    externo para armazenamento das respostas.
                    <br /> <br />
                    Ideal para divulgação de produtos ou serviços, com foco em conversão e usabilidade.
                </ProjectItem>
            </div>
        </>
    )
}

export default Projects