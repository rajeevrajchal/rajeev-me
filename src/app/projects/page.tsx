import { Button, Card, Flex, Grid, Text } from "@radix-ui/themes";
import { map } from "lodash";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub, FaLink } from "react-icons/fa";
import { getProjects } from "./actions";

const Projects = async () => {
  const { data: projects } = await getProjects();
  return (
    <Grid
      columns={{
        xs: "1",
        sm: "2",
        md: "3",
      }}
      gap="3"
      width="100%"
    >
      {map(projects, (project: any) => (
        <Card key={`project-${project.id}`}>
          <Flex align="start" direction="column" gapY="3" width="100%">
            <Flex align="center" justify="between" width="100%">
              <Text weight="medium" className="select-none">
                {project?.properties?.name?.title?.[0]?.plain_text}
              </Text>
              <Flex align="center" gapX="4">
                {project?.properties?.github?.url && (
                  <Link
                    href={project?.properties?.github?.url}
                    target="_blank"
                    className="hover:text-blue-600"
                  >
                    <FaGithub size={18} />
                  </Link>
                )}
                {project?.properties?.website?.url && (
                  <Link
                    href={project?.properties?.website?.url}
                    target="_blank"
                    className="hover:text-blue-600"
                  >
                    <FaLink size={18} />
                  </Link>
                )}
                {project.public_url && (
                  <Link
                    href={`${project.public_url}`}
                    className="hover:text-blue-600"
                    target="_blank"
                  >
                    <FaExternalLinkAlt size={18} />
                  </Link>
                )}
              </Flex>
            </Flex>
            <Text size="2" className="text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe,
              iste.
            </Text>
            <Flex gap="2" wrap="wrap">
              {map(project?.properties?.tags?.multi_select, (type) => (
                <Button size="1" radius="full" color={type.color}>
                  <span className="capitalize">{type.name}</span>
                </Button>
              ))}
            </Flex>
          </Flex>
        </Card>
      ))}
    </Grid>
  );
};

export default Projects;
