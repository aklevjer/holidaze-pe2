import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Profile } from "@/types/user";
import Bookings from "@/components/profile/Bookings";

interface TabsProps {
  profile: Profile;
  isOwner: boolean;
}

export default function Tabs({ profile, isOwner }: TabsProps) {
  const { name, venueManager } = profile;

  return (
    <TabGroup className="space-y-8">
      <TabList className="flex gap-1 border-b border-slate-500">
        {isOwner && (
          <Tab className="-mb-px rounded-t-md border border-slate-500 bg-neutral-50 px-4 py-2 font-medium text-neutral-500 outline-none hover:text-teal-900 data-[selected]:border-b-transparent data-[selected]:bg-white data-[selected]:text-teal-900 data-[focus]:ring-1 data-[focus]:ring-teal-900">
            Bookings
          </Tab>
        )}

        {venueManager && (
          <Tab className="-mb-px rounded-t-md border border-slate-500 bg-neutral-50 px-4 py-2 font-medium text-neutral-500 outline-none hover:text-teal-900 data-[selected]:border-b-transparent data-[selected]:bg-white data-[selected]:text-teal-900 data-[focus]:ring-1 data-[focus]:ring-teal-900">
            Venues
          </Tab>
        )}
      </TabList>

      <TabPanels>
        {isOwner && (
          <TabPanel>
            <Bookings profileName={name} />
          </TabPanel>
        )}

        {venueManager && <TabPanel>Venues</TabPanel>}
      </TabPanels>
    </TabGroup>
  );
}
