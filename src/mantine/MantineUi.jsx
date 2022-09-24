import { Group, MantineProvider, Switch } from "@mantine/core";
function MantineUi() {
  return (
    <>
      <MantineProvider
        theme={{
          components: {
            Button: {
              defaultProps: {
                size: "xs",
                color: "cyan",
              },
              
            },

            Switch: {
              defaultProps: {
                size: "xs",
                onLabel: "ON",
                offLabel: "OFF",
              },
            },
          },
        }}
      >
        <Group position="center">
          <Switch label="Switch" size={50} />
        </Group>
      </MantineProvider>
    </>
  );
}

export default MantineUi;
