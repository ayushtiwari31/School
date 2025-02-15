import React,{ useRef, useState } from "react";
import {
    Carousel ,
    Typography,
    Navbar,
    Collapse,
    Button,
    IconButton,
    List,
    ListItem,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Select,
  Option
  } from "@material-tailwind/react";
  import {
    ChevronDownIcon,
    Bars3Icon,
    XMarkIcon,
    ChevronUpIcon,
  } from "@heroicons/react/24/outline";
   
  const nestedMenuItems = [
    {
      title: "Hero",
    },
    {
      title: "Features",
    },
    {
      title: "Testimonials",
    },
    {
      title: "Ecommerce",
    },
  ];
 
const LINKS = [
  {
    title: "Product",
    items: ["Overview", "Features", "Solutions", "Tutorials"],
  },
  {
    title: "Company",
    items: ["About us", "Careers", "Press", "News"],
  },
  {
    title: "Resource",
    items: ["Blog", "Newsletter", "Events", "Help center"],
  },
];
 
const currentYear = new Date().getFullYear();



function NavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [openNestedMenu, setopenNestedMenu] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const renderItems = nestedMenuItems.map(({ title }, key) => (
      <a href="#" key={key}>
        <MenuItem>{title}</MenuItem>
      </a>
    ));
   
    return (
      <React.Fragment>
        <Menu
          open={isMenuOpen}
          handler={setIsMenuOpen}
          placement="bottom"
          allowHover={true}
        >
          <MenuHandler>
            <Typography as="div" variant="small" className="font-medium">
              <ListItem
                className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
                selected={isMenuOpen || isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((cur) => !cur)}
              >
                Blocks
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`hidden h-3 w-3 transition-transform lg:block ${
                    isMenuOpen ? "rotate-180" : ""
                  }`}
                />
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`block h-3 w-3 transition-transform lg:hidden ${
                    isMobileMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </ListItem>
            </Typography>
          </MenuHandler>
          <MenuList className="hidden rounded-xl lg:block">
            <Menu
              placement="right-start"
              allowHover
              offset={15}
              open={openNestedMenu}
              handler={setopenNestedMenu}
            >
              <MenuHandler className="flex items-center justify-between">
                <MenuItem>
                  Figma
                  <ChevronUpIcon
                    strokeWidth={2.5}
                    className={`h-3.5 w-3.5 transition-transform ${
                      isMenuOpen ? "rotate-90" : ""
                    }`}
                  />
                </MenuItem>
              </MenuHandler>
              <MenuList className="rounded-xl">{renderItems}</MenuList>
            </Menu>
            <MenuItem>React</MenuItem>
            <MenuItem>TailwindCSS</MenuItem>
          </MenuList>
        </Menu>
        <div className="block lg:hidden">
          <Collapse open={isMobileMenuOpen}>
            <Menu
              placement="bottom"
              allowHover
              offset={6}
              open={openNestedMenu}
              handler={setopenNestedMenu}
            >
              <MenuHandler className="flex items-center justify-between">
                <MenuItem>
                  Figma
                  <ChevronUpIcon
                    strokeWidth={2.5}
                    className={`h-3.5 w-3.5 transition-transform ${
                      isMenuOpen ? "rotate-90" : ""
                    }`}
                  />
                </MenuItem>
              </MenuHandler>
              <MenuList className="block rounded-xl lg:hidden">
                {renderItems}
              </MenuList>
            </Menu>
            <MenuItem>React</MenuItem>
            <MenuItem>TailwindCSS</MenuItem>
          </Collapse>
        </div>
      </React.Fragment>
    );
  }
   
  function NavList() {
    return (
      <List className="mb-6 mt-4 p-0 lg:mb-0 lg:mt-0 lg:flex-row lg:p-1">
        <Typography
          as="a"
          href="#"
          variant="small"
          color="blue-gray"
          className="font-medium"
        >
          <ListItem className="flex items-center gap-2 py-2 pr-4">Pages</ListItem>
        </Typography>
        <Typography
          as="a"
          href="#"
          variant="small"
          color="blue-gray"
          className="font-medium"
        >
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            Account
          </ListItem>
        </Typography>
        <NavListMenu />
        <Typography
          as="a"
          href="#"
          variant="small"
          color="blue-gray"
          className="font-medium"
        >
          <ListItem className="flex items-center gap-2 py-2 pr-4">Docs</ListItem>
        </Typography>
      </List>
    );
}

function Home() {

const [openNav, setOpenNav] = useState(false);
const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen((cur) => !cur);

React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);


  
  return (
  <>

<Navbar className="max-w-full    px-4 py-2 rounded-none">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2"
        >
         Modern School
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          <Button size="sm">Get Started</Button>
          <Button variant="outlined" size="sm" onClick={handleOpen}>
            Log In
          </Button>
        </div>
        <IconButton
          variant="text"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button size="sm" fullWidth>
            Get Started
          </Button>
          <Button variant="outlined" size="sm" fullWidth onClick={handleOpen}>
            Log In
          </Button>
        </div>
      </Collapse>
    </Navbar>


    <Dialog
        size="xl"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none "
      >

        
        <Card className="mx-auto w-full max-w-[132rem] flex flex-row">

         {/* Left Side - Image (Hidden on Mobile) */}
        <div className="hidden md:flex w-2/3 bg-blue-gray-50  items-center justify-center p-4 relative">
          <img  className="h-96 w-full rounded-lg object-cover object-center"
      src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80" />

        {/* Text Overlay */}
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-5 ">
      <Typography variant="h4" color="white" className="text-center font-bold">
        Welcome to Our Platform
      </Typography>
    </div>
        </div>

        <div className="w-full md:w-1/3">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Sign In
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              Enter your email and password to Sign In.
            </Typography>
            <Typography className="-mb-2" variant="h6">
              Your Email
            </Typography>
            <Input label="Email" size="lg" />
            <Typography className="-mb-2" variant="h6">
              Your Password
            </Typography>
            <Input label="Password" size="lg" />
            <Typography className="-mb-2" variant="h6">
              Financial Year
            </Typography>
            <Select label="Select Financial Year">
              <Option value="2023-2024">2023-2024</Option>
              <Option value="2024-2025">2024-2025</Option>
              <Option value="2025-2026">2025-2026</Option>
            </Select>
          </CardBody>

          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handleOpen} fullWidth>
              Sign In
            </Button>
            <Typography  onClick={handleOpen} variant="small" className="mt-4 flex justify-center ml-1 font-bold" color="blue-gray">
              Forgot Password ?
            </Typography>
          </CardFooter>
        </div>
        </Card>
      </Dialog>








    <Carousel className='h-[400px]' loop draggable autoplay autoplayDelay={2000}    >
      <img
        src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
        alt="image 3"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image 2"
        className="h-full w-full object-cover"
      />
    </Carousel>
    <h4 className="text-center my-[50px] font-bold">
       Modern Vidya Niketan Sr. Sec. School, Sector-17 Faridabad
    </h4>

<div className="p-1 flex flex-wrap items-center justify-center">


  <div className="flex-shrink-0 m-6 relative overflow-hidden bg-white rounded-lg max-w-xs shadow-lg">
    <div className="relative pt-10 px-10 flex items-center justify-center">
      <img
        className="relative w-10 md:w-20 lg:w-32"
        src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
        alt=""
      />
    </div>
    <div className="relative text-white px-6 pb-6 mt-6">
      <span className="block opacity-75 -mb-1 text-center text-black font-bold">Indoor</span>
    </div>
  </div>


  <div className="flex-shrink-0 m-6 relative overflow-hidden bg-white rounded-lg max-w-xs shadow-lg">
    <div className="relative pt-10 px-10 flex items-center justify-center">
      <img
        className="relative w-10 md:w-20 lg:w-32"
        src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
        alt=""
      />
    </div>
    <div className="relative text-white px-6 pb-6 mt-6">
      <span className="block opacity-75 -mb-1 text-center text-black font-bold">Indoor</span>
    </div>
  </div>


  <div className="flex-shrink-0 m-6 relative overflow-hidden bg-white rounded-lg max-w-xs shadow-lg">
    <div className="relative pt-10 px-10 flex items-center justify-center">
      <img
        className="relative w-10 md:w-20 lg:w-32"
        src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
        alt=""
      />
    </div>
    <div className="relative text-white px-6 pb-6 mt-6">
      <span className="block opacity-75 -mb-1 text-center text-black font-bold">Indoor</span>
    </div>
  </div>


  <div className="flex-shrink-0 m-6 relative overflow-hidden bg-white rounded-lg max-w-xs shadow-lg">
    <div className="relative pt-10 px-10 flex items-center justify-center">
      <img
        className="relative w-10 md:w-20 lg:w-32"
        src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
        alt=""
      />
    </div>
    <div className="relative text-white px-6 pb-6 mt-6">
      <span className="block opacity-75 -mb-1 text-center text-black font-bold">Indoor</span>
    </div>
  </div>



  <div className="flex-shrink-0 m-6 relative overflow-hidden bg-white rounded-lg max-w-xs shadow-lg">
    <div className="relative pt-10 px-10 flex items-center justify-center">
      <img
        className="relative w-10 md:w-20 lg:w-32"
        src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
        alt=""
      />
    </div>
    <div className="relative text-white px-6 pb-6 mt-6">
      <span className="block opacity-75 -mb-1 text-center text-black font-bold">Indoor</span>
    </div>
  </div>


  <div className="flex-shrink-0 m-6 relative overflow-hidden bg-white rounded-lg max-w-xs shadow-lg">
    <div className="relative pt-10 px-10 flex items-center justify-center">
      <img
        className="relative w-10 md:w-20 lg:w-32"
        src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
        alt=""
      />
    </div>
    <div className="relative text-white px-6 pb-6 mt-6">
      <span className="block opacity-75 -mb-1 text-center text-black font-bold">Indoor</span>
    </div>
  </div>  
 
</div>


<div className='divider'></div>
<footer className="relative w-full mt-[50px] ">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <Typography variant="h5" className="mb-6">
            Material Tailwind
          </Typography>
          <div className="grid grid-cols-3 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-3 font-medium opacity-40"
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      color="gray"
                      className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear} <a href="https://material-tailwind.com/">Material Tailwind</a>. All
            Rights Reserved.
          </Typography>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                />
              </svg>
            </Typography>
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clip-rule="evenodd"
                />
              </svg>
            </Typography>
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </Typography>
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                />
              </svg>
            </Typography>
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                  clip-rule="evenodd"
                />
              </svg>
            </Typography>
          </div>
        </div>
      </div>
    </footer>

  </>
    
  );
}

export default Home;
