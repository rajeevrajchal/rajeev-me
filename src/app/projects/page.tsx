/* eslint-disable @next/next/no-img-element */
import { Card, Flex, Grid, Text } from "@radix-ui/themes";
import { map, orderBy } from "lodash";
import { getProjects } from "./actions";

const Projects = async () => {
  const { data: projects } = await getProjects();

  return (
    <Grid
      columns={{
        sm: "1",
        md: "2",
      }}
      gap="3"
    >
      {map(
        orderBy(
          projects,
          [
            (project: any) => {
              const orderNumber = project.properties?.order?.number;
              return isNaN(orderNumber) ? -Infinity : Number(orderNumber);
            },
          ],
          ["asc"]
        ),
        (project: any) => (
          <Card key={`project-${project.id}`}>
            <Flex direction="column" gapY="2">
              <div className="h-[30vh] w-full rounded-md overflow-hidden">
                <img
                  src={project?.properties?.images?.files?.[0]?.file?.url}
                  alt="the image"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <Text weight="bold" className="select-none">
                {project?.properties?.name?.title?.[0]?.plain_text}
              </Text>
            </Flex>
          </Card>
        )
      )}
    </Grid>
  );
};

export default Projects;
