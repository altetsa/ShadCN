import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "../../components/ui/alert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../components/ui/alert-dialog";
import { AspectRatio } from "../../components/ui/aspect-ratio";
import {
  Avatar,
  AvatarFallback,
} from "../../components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../components/ui/breadcrumb";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Checkbox } from "../../components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../components/ui/collapsible";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../../components/ui/hover-card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../../components/ui/popover";
import { Progress } from "../../components/ui/progress";
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Separator } from "../../components/ui/separator";
import { Skeleton } from "../../components/ui/skeleton";
import { Switch } from "../../components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Textarea } from "../../components/ui/textarea";
import { Toggle } from "../../components/ui/toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";

const meta = {
  title: "UI/Core Components",
  parameters: {
    layout: "padded",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const LayoutAndFeedback: Story = {
  render: () => (
    <div className="grid w-full max-w-4xl gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Project overview</CardTitle>
            <Badge>Active</Badge>
          </div>
          <CardDescription>A card with common content sections.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">ShadCN project</p>
              <p className="text-muted-foreground text-sm">Updated just now</p>
            </div>
          </div>
          <Progress value={65} />
          <Separator />
          <Alert>
            <AlertTitle>Ready to go</AlertTitle>
            <AlertDescription>
              Your project components are available in Storybook.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Components</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <AspectRatio ratio={16 / 9} className="bg-muted overflow-hidden rounded-lg">
          <div className="flex h-full items-center justify-center text-sm">
            16:9 aspect ratio
          </div>
        </AspectRatio>
        <div className="space-y-2">
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </div>
    </div>
  ),
};

export const FormControls: Story = {
  render: () => (
    <div className="grid w-full max-w-3xl gap-8 md:grid-cols-2">
      <div className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="storybook-email">Email</Label>
          <Input id="storybook-email" type="email" placeholder="name@example.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="storybook-message">Message</Label>
          <Textarea id="storybook-message" placeholder="Write a message..." />
        </div>
        <div className="space-y-2">
          <Label>Plan</Label>
          <Select defaultValue="starter">
            <SelectTrigger>
              <SelectValue placeholder="Choose a plan" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="starter">Starter</SelectItem>
              <SelectItem value="pro">Pro</SelectItem>
              <SelectItem value="team">Team</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-5">
        <div className="flex items-center gap-2">
          <Checkbox id="storybook-updates" defaultChecked />
          <Label htmlFor="storybook-updates">Send me product updates</Label>
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="storybook-switch">Enable notifications</Label>
          <Switch id="storybook-switch" defaultChecked />
        </div>
        <RadioGroup defaultValue="comfortable">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="default" id="density-default" />
            <Label htmlFor="density-default">Default density</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="comfortable" id="density-comfortable" />
            <Label htmlFor="density-comfortable">Comfortable density</Label>
          </div>
        </RadioGroup>
        <Toggle aria-label="Toggle bold text">Bold</Toggle>
        <Tabs defaultValue="account">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="text-muted-foreground pt-2 text-sm">
            Manage your account details.
          </TabsContent>
          <TabsContent value="security" className="text-muted-foreground pt-2 text-sm">
            Review your security settings.
          </TabsContent>
        </Tabs>
      </div>
    </div>
  ),
};

export const DisclosureAndOverlays: Story = {
  render: () => (
    <TooltipProvider>
      <div className="grid w-full max-w-3xl gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Can I use these components?</AccordionTrigger>
              <AccordionContent>
                Yes. These stories showcase the shared components from the root project.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Are the examples interactive?</AccordionTrigger>
              <AccordionContent>
                Inputs, tabs, disclosures, and overlays can be used directly in the preview.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Collapsible>
            <CollapsibleTrigger asChild>
              <Button variant="outline">Show details</Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="text-muted-foreground pt-3 text-sm">
              Collapsible content is revealed when the trigger is activated.
            </CollapsibleContent>
          </Collapsible>

          <div className="flex flex-wrap gap-3">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Open dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Example dialog</DialogTitle>
                  <DialogDescription>
                    Dialog content is rendered in an accessible modal.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">Delete item</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>

        <div className="flex flex-wrap content-start items-start gap-3">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Open popover</Button>
            </PopoverTrigger>
            <PopoverContent className="text-sm">
              Popovers display contextual content next to a trigger.
            </PopoverContent>
          </Popover>

          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="link">@storybook</Button>
            </HoverCardTrigger>
            <HoverCardContent>
              A preview that appears when hovering over a trigger.
            </HoverCardContent>
          </HoverCard>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="secondary">Hover for a tooltip</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Helpful context for this action.</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  ),
};
