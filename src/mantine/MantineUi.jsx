import { Group, Loader, Text } from '@mantine/core'
function MantineUi() {
    return (
        <Group style={{ display: 'flex', flexDirection: 'column' }} spacing={60}>
            <Loader color="#42a5f5" size={100} variant="oval" />
            <Loader color="#4f80e2" size={100} variant="bars" />
            <Loader color="#4fe0b6" size={100} variant="dots" />

            <Text color='#fff' size={50}>made by alex</Text>
        </Group>

    );
}

export default MantineUi;

