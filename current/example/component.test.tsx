import { test, expect } from '@playwright/experimental-ct-react';
import { ComponentStory } from './component.story';

test('ComponentStory screenshot', async ({ mount }) => {
    const component = await mount(<ComponentStory />);
    await expect(component).toHaveText(/Hello/);
});
