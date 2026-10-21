import type { Meta, StoryObj } from "@storybook/react";
import { Calendar } from "../../components/ui/calendar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../../components/ui/command";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "../../components/ui/context-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../../components/ui/drawer";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "../../components/ui/input-otp";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "../../components/ui/menubar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../components/ui/navigation-menu";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../components/ui/pagination";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../../components/ui/resizable";
import { ScrollArea } from "../../components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../components/ui/sheet";
import { Slider } from "../../components/ui/slider";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table";
import { Toaster } from "../../components/ui/sonner";
import { ToggleGroup, ToggleGroupItem } from "../../components/ui/toggle-group";
import { Button } from "../../components/ui/button";
import { toast } from "sonner";

const meta = {
  title: "UI/More Components",
  parameters: {
    layout: "padded",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const CalendarAndCarousel: Story = {
  render: () => (
    <div className="grid w-full max-w-3xl gap-8 md:grid-cols-2">
      <Calendar mode="single" defaultMonth={new Date(2026, 9, 21)} />
      <Carousel className="mx-auto w-full max-w-sm">
        <CarouselContent>
          {["First", "Second", "Third"].map((label, index) => (
            <CarouselItem key={label}>
              <div className="p-1">
                <div className="bg-muted flex aspect-video items-center justify-center rounded-xl">
                  <span className="text-2xl font-semibold">{index + 1}</span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mt-2 flex justify-center gap-2">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  ),
};

export const CommandsAndMenus: Story = {
  render: () => (
    <div className="grid w-full max-w-3xl gap-8 md:grid-cols-2">
      <Command className="rounded-lg border shadow-md">
        <CommandInput placeholder="Search components..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Components">
            <CommandItem>Accordion</CommandItem>
            <CommandItem>Dialog</CommandItem>
            <CommandItem>Select</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>

      <div className="flex flex-wrap items-start gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Open menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Sign out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <ContextMenu>
          <ContextMenuTrigger asChild>
            <div className="bg-muted text-muted-foreground flex h-24 w-48 items-center justify-center rounded-md border border-dashed text-sm">
              Right-click here
            </div>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>Open</ContextMenuItem>
            <ContextMenuItem>Rename</ContextMenuItem>
            <ContextMenuItem>Duplicate</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>

        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>New document</MenubarItem>
              <MenubarItem>Open</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Save</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Edit</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Undo</MenubarItem>
              <MenubarItem>Redo</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink href="#" className="block p-4">
                Browse the component documentation
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#" className="px-4 py-2">
              Examples
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  ),
};

export const DataAndInputs: Story = {
  render: () => (
    <div className="grid w-full max-w-3xl gap-8 md:grid-cols-2">
      <div className="space-y-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Component</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Accordion</TableCell>
              <TableCell>Ready</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Dialog</TableCell>
              <TableCell>Ready</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <div className="space-y-2">
          <p className="text-sm font-medium">Volume</p>
          <Slider defaultValue={[60]} max={100} step={1} />
        </div>

        <ToggleGroup type="single" defaultValue="center" aria-label="Text alignment">
          <ToggleGroupItem value="left" aria-label="Align left">Left</ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Align center">Center</ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Align right">Right</ToggleGroupItem>
        </ToggleGroup>

        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>

      <ScrollArea className="h-56 rounded-md border p-4">
        <div className="space-y-4">
          {Array.from({ length: 8 }, (_, index) => (
            <p key={index} className="text-sm">
              Scroll area content item {index + 1}
            </p>
          ))}
        </div>
      </ScrollArea>

      <ResizablePanelGroup direction="horizontal" className="min-h-32 rounded-lg border">
        <ResizablePanel defaultSize={50} className="p-4">
          <div className="flex h-full items-center justify-center">Resizable panel</div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50} className="p-4">
          <div className="flex h-full items-center justify-center">Drag the divider</div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
};

export const SheetsDrawersAndNotifications: Story = {
  render: () => {
    return (
      <div className="flex flex-wrap gap-3">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Open sheet</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Sheet panel</SheetTitle>
              <SheetDescription>
                A side panel for supporting content and actions.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline">Open drawer</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Drawer panel</DrawerTitle>
              <DrawerDescription>
                A mobile-friendly panel anchored to the bottom of the screen.
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button>Done</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

        <Toaster />
        <Button onClick={() => toast.success("Your changes have been saved.")}>
          Show notification
        </Button>
      </div>
    );
  },
};

export const PaginationExample: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
};
