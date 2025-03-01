import * as React from "react";

export const Home = () => (
    <gridLayout class="bg-black">
        <image src="https://miro.medium.com/v2/resize:fit:1400/1*cuQ5zNN0gVuHfPFKh9smSQ.png" class="align-top"></image>

        <stackLayout class="align-middle">

            <gridLayout class="mt-10 mb-2 rounded-md size-60 border-8 border-gray-700">
                <image src="https://tailwindcss.com/_next/static/media/cover.de1997f7.png" class="rounded-sm" />
            </gridLayout>
            <stackLayout class="text-center space-y-1">
                <label class="text-2xl font-medium text-white">Class Warfare</label>
                <label class="font-medium text-sky-500">The Anti-Patterns</label>

                <gridLayout rows="auto" columns="*,auto,auto,auto,*" class="font-medium text-gray-600 dark:text-gray-400">
                    <label col={1}>No. 4</label>
                    <label col={2} class="mx-2">·</label>
                    <label col={3}>2025</label>
                </gridLayout>

            </stackLayout>
        </stackLayout>

        <gridLayout class="align-bottom" columns="*,auto,auto,*">
            <image col={1} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png?20220125121207" class="size-18 mr-2"></image>

            <image col={2} src="https://raw.githubusercontent.com/NativeScript/artwork/main/logo/export/NativeScript_Logo_Wide_Transparent_White_Rounded_White.png" class="align-bottom size-40 ml-2"></image>
        </gridLayout>
    </gridLayout>
);
