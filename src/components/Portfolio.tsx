import React from 'react';
import { ExternalLink, Github, Globe, Smartphone } from 'lucide-react';

const Portfolio = () => {
  const projects = [
     {
      title: 'JOB PORTAL WEBSITE',
     description: 'MERN Stack and WordPress web application with 7⁺ pages, user authentication, and a job filter search feature that allows users to search jobs by category, location, and profile type.',
     image: 'https://raw.githubusercontent.com/ajaykumardhurwe/Assets/refs/heads/main/fproject1.png',
     
    //  image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React', 'Firebase', 'Wordpress', 'MongoDB', 'Node Js', 'express Js'],
      type: 'web',
      demoUrl: 'https://hii247.in/',
      githubUrl: 'https://github.com/ajaykumardhurwe/jobs.hii247.in'
    },
      {
      title: 'MOVIES WEBSITE',
     description: 'Developed a dynamic movie website with real-time filtering by categories like Hollywood, Bollywood, South, Hindi Dubbed, and English. Implemented a powerful search feature that allows users to find movies by name instantly. Clean UI and responsive design ensure smooth browsing across devices.',
     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdKQ5G2GfyyTw0Jq7tZSRKo5PO3WP4FdEqWA&s',
     
    //  image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React', 'tailwind', 'vite', 'Google Sheet',
        //  'Firebase', 'Wordpress', 'MongoDB', 'Node Js', 'express Js'
        ],
      type: 'web',
      demoUrl: 'https://movies.36garh.de/',
      githubUrl: 'https://github.com/ajaykumardhurwe/movies'
    },
    {
      title: 'NEWS WEBSITE',
      description: 'Built a responsive and user-friendly news website using WordPress, featuring dynamic content updates, categorized news sections (e.g., Politics, Sports, Tech, Entertainment), and a powerful search function to help users find news articles by title or keyword. Integrated SEO-friendly structure and customizable widgets for enhanced user engagement.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZCIgfUfJUyzxTaCzWkZQIKzCltjNHq-Ti0g&s',
      tags: ['Wordress',
        // 'Node.js', 'MongoDB', 'Stripe'
      ],
      type: 'web',
      demoUrl: 'https://newsmidnight.com/',
      githubUrl: 'https://github.com/ajaykumardhurwe/cgnewsmidnight'
    },
    {
      title: 'EDUCATIONAL APP',
      description: 'Developed a cross-platform educational app using Expo, offering study materials, free MCQ tests, and more. Designed for smooth performance and intuitive user experience, with features like category-wise content access, test scoring, and mobile-friendly navigation.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV22Yt7Fpxch1EiJyZUXUUST4RZRpB5wWSGw&s',
      tags: ['React Native', 'Firebase', 'Expo', 'Maps API'],
      type: 'app',
      demoUrl: 'https://play.google.com/store/apps/details?id=com.ajaykumardhurwe.ajaydhurwe&pcampaignid=web_share',
      githubUrl: '#'
    },
    {
      title: 'JOB PORTAL AND NEWS WEBSITE',
      description: 'Created a combined Job Portal and News Website featuring the latest job listings, categorized by sectors and qualifications, along with daily news updates. Integrated search and filter functionalities for both jobs and news articles, built with a responsive design for seamless access on all devices.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuRsl1bqkq3tg39ykaNKLaiA2qXqd1PaG1sw&s',
      tags: ['WordPress'
        // 'Tailwind', 'Framer Motion', 'Netlify',
      ],
      type: 'web',
      demoUrl: 'https://hii24.in/',
      githubUrl: '#'
    },
    // {
    //   title: 'Task Management App',
    //   description: 'Cross-platform mobile app for team collaboration with real-time updates and file sharing.',
    //   image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600',
    //   tags: ['React Native', 'Firebase', 'Push Notifications'],
    //   type: 'app',
    //   demoUrl: '#',
    //   githubUrl: '#'
    // },
    {
      title: 'JOB PORTAL AND GOVT SCHEME WEBSITE',
      description: 'Developed a responsive website that combines the latest job updates with detailed information on various government schemes (yojanas). Includes features like category-wise filtering, search by job title or scheme name, and regularly updated content to keep users informed and engaged.',
      image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARkAAAC0CAMAAACXO6ihAAACuFBMVEX///8kJmPMAAHA4sr4+PofImE/QXX8/PzEEh7KAAD//v/OAAAWGV38//8AAFYSFl3c3eZrfYcAAFMdH2AAAEoeIGAAAACvr685jT9xuwK4uLgKEFsZG16Cg6Hq6urn5+3U1NQqLGaen7PNzti5usrDw8NwcZWur8AACFnAwc0zNW1iYofIyMjg4OBgmmVTVH2mpqaMjaYjOUYtQlO7AABHSXaZmq/6uGL98u33r4qxAACwKSbi4uq807kniCvWka36wqykAADqoHL26/D/9uh7ha36zbf2nmwAG3SLlLf2l12Yn70vQ4fft6Hi6OXB6c6brp6UvJfSMjHQWl3O6dZqmG/snmGOm57dgYF1g4zbfAj//wkrfizuw8ScwJ7RABVQkFDfqquqlpbclJf/vVLit8vaobrZoKHGe5rHdJJrOT5JWmcOMEMAKkVETkpnYUhVUDU7TFbZz7YaKzauii6Abj4nPUMAJ0bXmi3427HIom/bpB5HRDyggTfesIfHzOP9y2Weqtlpd7XdpI3mxJGyl6dxfbf60I/84tZZZJdcaJtCVJEbNYCzweHNubkAAG7zgDTyWQD0ekWwlZD3ooOfQz6jUU6lKi2kZmSkfHr2kU/nyqXydgDd5ceURTuMU1C78+j4mlnkejQAgkThdnLRRETOvIvdZHLciZXad2DbYBvZT1nOKDtVZXvckQHFPwAAcgDmqglYkVvovg/x4wjZbQB8mX/ljA31sLb56RDxcmy11qjzXlzsOzhQolb2mJ9pcWzJbG9kDRTBIy0nEQ8AIB4lIxUzAArXrlv8+s37+af2+JJ/KjH8+dL5FRrBazs/NhzAdBGxPyNzVTFMOA3tzNn571usAC74qUWkQWtzAADD2Za1eoA2owB8vEnL4bVyuj0/KjYAADRCIReUR1vu2IKLwH1dq0Qu4QWmAAAgAElEQVR4nO2di38T153oR2Ls0UgeWbGx5Uq2JCM/sWTLiQzGLzAyoTSNwJYIMliWZRGc3HTpJtl2Q/Mgj4a6TWHdUh4mkDRd64ZrJzhgKIakAUKSTfrINs31Jmmeu7fL/hv39ztnZjSjt0l24fOJfwnSaDQ6c853fuf3OOfMmGGWZEmWZEm+UcK6HS6Hjb3R1biZhHW7LNtuue+2W7/3ve/ddv99t2yzuNxLgNjB+5HI3926+/vf//7u+24DuRU+33rrbfcPftPpuM2D9/89ULlNkvtvAzKDZveNrtjNIH3trvtQS1BuvfXW+2ttN7pGN4v09dkevFUUUJrvOW50hW4a6evb9j2ZCxiawRtdoZtG+vruu1VB5rb7uRtdo5tF3A/88O++lyDzdw+23+ga3SzifmDnP/zgh/+Ivvq2f/zhD/7hocYbXaObRfbsYR740c6HH33kH3c/+vDDP3psbMOGb3osI8qePXs3gbXZs/rU43tqnnjyyQ1PPf2k6UZX6qaQPT/eTzf6yKtp05NPjy2hQdnzk6QdB/a1ju2z35C63Fzy42QyfXfue/rAphtSl5tLCBlunGHG16xfM4572seeHNu09wZX6wYI+7Pvmn7602c23cH+rPGZZ+64o57Z4GTa1zC3bxxvH1+/Dg8Zb62PbrixtbwRUv+zmp92fdu5aRP73ZpnTD/f9DPm5yyS2YgRHvcdcsyd+8c2ffMszaY7ur7LfJu9A8n8lHmm5rvOZ5gEmY3kmNv3Hmj95nWnO7CfJMg4f7phUwqZ9vH6A3fc0FreCLH/HGJcIHMHJWPa9E97FWTWi0fVfwO9k9204RlCxk7JNH6bTUOm5s5vHplNm5hv68Xe9DPoTV3PcITMd5J05pvXmxp/vum7zD+x4JV+WvPzDd+2m76bINPeTu0MI9Q/vf/GVvNGSA045E0svtnvuMPEsOiEsDfdDiozsYYeYz+46ZubOo2Pc+sYZh2Jepn2dUz7xomJiTXE2jDsvjv3fXOHItatG//F+Jpf/TLdEN4dT6+6SToTxzH4HxG9PufRilflDk7aBSXYXJYtRCwuG0eP4aQDOPJv3brbN65bt6YdPnWNq0/g3Hcnjl7RH3C0ZLrN5TFIzEkt4tS1TDpIL1aJND2vsWc4Vs8InNt14ODBycmDBw+43KwAu4V8fkzrwtZ6tnQvA9kM/7q3eHAKKeXc69b9at2vmF+uE+zM3lXrlJpj2vfUhq8xAtZzjADXSrBBiyZBRi0O22IalBCBsdVOHur1enmtQctr+Y6OQ5MWnB7Lc1CftWzpRiSSbAY4llSrsW7dxo2/HG//ZfumLlP9/rHbpV/v3bThqQ1fb18C9XCMHu6EFhmgRby348hRs/86wDgmO70GIlCKVsvjhrdz0pVnUY5t3TKTYFBE1L3FlXzcujXfGf8FsTObnGue3rCh3tRl7zLt3/fk009t+JpjGdZ8uIM3aLVaaAm0CVvk7Tyab4NABOhHgutoB08KIFgkMRj4juehKC67EYJvzVtkZQk+duyFZzcvo3C2eJLUt318nLmdI75p/6ann3p635P79u17cgNsPZmzK3EpGxlrJDCC+RBeadIO0iZsnYHXeo86qOnILcDFP9khFZIkUJb3qJ/JwZnb0p0As3Hiro3HHxO1ZnP3tsx+2L5hX/3YnShj9fs25eOvbTa325bXehv/8960LQJb0TEq5GtuzL0GCWw6Ntpec45yPAkwyx44/sL4+MRxqUNtXpYFDcPu37QPteaJ/Tlby7ktHo/FBVJr8ZhzLRCgTUrbGt7gfc6f62zQlViGBYVBlpnF0DHJZtZgjjErwGx+7PixNXdNHH9A3tO9Rf/VZ2bdZrNDAY+z1XpcGWFywmhv+i5Arz9caxfD5bgWHKgdn6EQGQx0qcNZKLsSNgbIgM7cfnzi+InErm4Lk0+vziJucxoMbrMlg+IIk97sTTIYei05Izj/c8RJ50DDGw5lXPVj25Jw1rAVfOH4xvXH1/96mbx385avtmLIZnaJUWNCSPBnM9em00ZhEi5lrib11mY7JZTuf86QowxSDvwPfTMNZADvSRjfZ58F83Ji/bFjjy0LBk8EZTbbvgoYV5qoSBK3x5YayY7m0BgRjYPJ3MvBtT2fDxgtCW+eS1dBPeOW+9KJY8eOQS+CcCa4eXNw47HvyLZmi+O6mBA1MaeEREphzUlFC0JthyGXfSANOsQKmW0n6l1eYLAo7WQaD8UpVGb9xLPjEy8EAQ10pfUT47dPBGX/dF1csHxPdiekZ2pdaufgPwIXO/flhg43SdKHdG1iGAvoXd5oDF5zmjAgYWWCL0yseWFi4tfPHpv4zgO/PgYfEmZ4i/u6bDCHYPRwUvgPBPpuIrkUBA5iVBGNuFPQC3Cx821PR2Zt9HfmjYVQ7k2TddQmPPaa489OTGwExzQBTvux4+uOvxCUvzPnChbTk8muMXo94WVxSGigezg68m/T4Yx1muSp3vEkKRB1kOdJ2kQ2xc9kH0bWR4WUsjwJxwRKc9exvuMTP+5bMzERfOyudQkwy7bor4eMxc0Eu7OI/67fPAZxvtkmdShOOJpeZZLDG/LRa0l7Vo5xddBYBY8j7ScfeJo6IScD7jWQ3Rg6ptM/Th3LPPDrZ49PbBxfD/HMZhAFmetZ1OqA0/W/MkSlp2dIFtzu6en557uO/ejcY6hachdzQOyrsDMJ582LjaQ7xWalVxqBRbw6fgCOGCB0DDqDdwAz0gFKJT5AdCWii+OZkLrhaHJRNhWZzZgcTNwO1uZ4cJlySGLZ9YQ0LNg1pr+nIpP0NE/8+J/vWg+mxiZf/IN4ASUw5LryiS36BbSQXGiQDkf6KwI9kj8ZmolEAiEtH4lo+Zg2FBjgI96Lugjv1QZCU1BYPB4fC3m1Ed2UF8pLURr3FhWAZZv9YGqgMx0LqnYv687qe9OLxZaZzMgIvDRv/N8VhAwjRcPsEYNBp4t7eWoGdHwcLy9e9rjOQO2E1hDX6QZ43UA8ruMPpjsvGnFeGw8PhKaeCoVCl6JTsXl+PjYVi8VjsVgoGgnz2thUNBZ7MRoLvfir9aFQAMqdFARVWOPoVnFZhkpzfP3ExIllSWSyhpxphBMVQSbT04+bQ83k85B/eAjeXh+puItMO7AesTodhshYbCZ+MT41EBrQRgPQsoEp+DAQjQZmYoGpwBRc8Si2cT46FYKYJo39sx3Bjqc7GYCGw6EoUUM8Ctvx6KXQVIAPe+PRQCB25f+sP/mrh9adDD077dUaOv3q6EFNBqywv9Gy5q51Fkdwc7C2VqE4iyUDIR6rIjPk9/dUDHV3VwyNNA/1UDIgoDMYy4q59yioxXgsNBULhMdCMT42NhUbj4eAlS4cCsyHArB/IPRiOBYPT8FLjAdvmxpO1HpxGGeGHwjNzEwB1pmpQEAL71MDusAU/I6Ph3ShmYGZ9etfuutXM6F3joXQRnsPqN2vmkzQMfjy4OAtt9wC/yyDL1sSZBatM2BWyTWQyTR3M1t7RoTg6939weFXggoy2DiwSSjPGwyRKWhNLDQfmpniZ0KB0IuhGKg7GINYLBAKTI0NgJWYGpiPhPhAiPda0pCZJL6MdEJqrImd8lL3zAfi1EPxp2b509Pe86clfzWp1hmVnQmaX75FIYMKlVm8nRG1QCLTMzzk7x6CXvTK8NZg9yv+JDIMTa5I/MtLgQaJdHnxs4GXQpAAbYoBTc/B1GRQeC5lTAbp6HSRyAA/MBChYc7saS/8Pz13TjrUcEgd0igT7aDnllsykVm8bxIth0SmefhatzACvajnt8Pdacg4HFibDONV6lYSpy6Of06m6ow/tRDAGoiH46FAADrVVfgcmT7NnzvlPXWal0IBCGnUAzWcgoxDpTG3bNtWn0Cz6HiGtajJLBvqOcN0vxLsHvF3B4NDXDIZcjw2KntyAM2YnRWjWuweaSIaGkXzBhr3iFEdH9ZNgXWK6gyhGfhy+8P8qe3eue3Kk3mTukUiBg5uo5qC/6OxcdheDspotiwSDNUBkGFK5vX+1+Fff8WZ/pHmZnjpv1ahsMB4oAV6ub9DUVMDrx7Bxc3Z2dnp6elZXppSSEfGQgcxqDGRu2ZsIPJSfAZdHijQqVP86XPTc9Oqq+A1q8tJ5E1BCsbmsLgdDiehs83iEL80p1Qgh0iDMv2vn2keGQKvhO4JXobgtRnMTkUyGbRL7g4lCXXKDduz51BmeV7qAVrDc8lkOAgWaZfzznpn586e9s6d9YIGRbxamiTAF6dBXaa3n51NUs+k4CgRBCfIOBwO0yD59PK2oGhmFptrm0VDP3xGgPxopEIZ8An9QxVKMkRcbtQZXgGGV08R8dvPnZvePuvlE5JGZwTmIOlM5+Z27NhxevbUjrMdcxe8PFVBA/FPc+ciZ2dPAS+1GCaTipK7k4uSsd9nrr2va1A0NmaRzKJHgiUl6x9i+kfA2jSP9JwZGRnp6Wk+U3GmoudM8xDEwc0jCTJuB5KRMkd++vTp8+fntp+eJpYCEM1uP7cnvGd+bH4+FrsUosJDupNSsUk6MQXe5+yOHae8cztgQ/JWhogW1GX2gnduLmU8NYWMNKYnmhnRzohgXnZdp89WkRkWRrp/u+xMt79bqAj+9tUzwtbfBvuDQ/5gt39I7k02OAcruxUDspk7df7UqXPU2m4/d/78/Px89NKlS/P4b+qpmXCYh9akkDlokA3M9NyOC6A2s3On5Uxses577iyASR3XSiaTGNQzO29JksFtg3Qs+DqG9BRkuvtHKoTm7v7uYIUw4vdvrRC2+rsrmJFg/1amQkWGOSQO3vIksfSem9t+6tQ0H+G3n4eN7fMXo6+Fp6bmL168OA9qE57ntaPJ54XepKUD32Qae/rsjulTF7wXZsXE9Pyc99Tc7NnTYgomjuLwaXVGDmmCfnMSGD/1Tdc1d6DUmZ6eEWbr0BAhU+HnRvqa/cMVzBn/cDOj1hnmaOJKkup6EQ0Ivs5CVhie982Hw6A7oDUgWm9tss4IkGEoFYH0ptPn5ryoR6A8oC6zF057afeKDBgUw1mp6WmtZISlDiWBkeLf9ANEeZIZYYbBFQX9/a93B88wZ149EzzD9Q93b4XeNNzPjKjJeNS9H4IXQLP9/Pnzp8+B6Zi/NPUaF7oYfu1S9HfzU7+bj6bJm/SS15ZKQN90dvbsOSBw6uy52bOnpi+cR2Q6bQQSKJ6PRCI0CEj22ijS5O1mizLQE8FsXubJMEQPaTvLpo4SJpF5/bfNOOrQv7WieevI1teb+5tHtjYPbYUetrW5+bevqyww41bHr/Qyg2wnfip86bXXfJfe4y5eCv9uPnTp4rz2MJtcNz3jUE3KQBEXTp8723Hh7FlQlVMXprfvOEfyJ0jGpkKQtMdjgdhVol0pxlSA5E9cOYPdyVVrNuP7NinKS5rXJlMZgt8y+unRw4dADh8dtbgRD65fUJCRvHYPCCgNvlTQLTGRSopn0GtDzpMa2c9CZEfNQfipixenwhfDsfkw9qbwJX40jc/EQFrF5twO79z5yLlz3ukLc97T1OTw2hjkCoGpKwPxAA5kpWYHVCiazcss4JTAuAT9EOWJ/jp5LQRor+AaPdTBEz1E0eKan8laXCKluIDSlP5wT/NWUJrmZpI8nUkZwlJFejgMkYpGGtSG3jQfBSCyRHvTGUDhkLoInp+b8+6AAODChWnvBQz7yN6BqXg8MDUzA9lUCLNMw6F06ys4xrwFQQAUHOXcTDdIIJPSlWyjf/QaDPFYJKKLkADdgHgM3iMHVX2edA5KRvAP9QxvxWGrYHfKCJ8qOxDSpYMyIOKypPF+MuafMnhLZDL5p7MQ1pw+e3rae3rHwzRnh4AHEnU0MPBCxshxOi5daQLj2KIcqZGivy21SYfZRjsh0o4YXgwEdJH4WCw6FjsZeInojqF30s3IQ2xSRjncMzTMNFdcGwLjAjrTU7F1K+rO1pGeoeatCjLS8SnNUpDhxcFxg+hyM0w41apnf+En20FlprdDcDPtFcMCg3Yqzod0Ed1ALM7HgY7Ba8k0ccSatySN73VvMSdl2KznCB8xnAxoZ2JR9xWDdiwWnhm7shANvzSl4wNXDL0HEwsDPXQDM0p/sH8Ewplh0JlXglv9w0OYMAx1D3eDCqlGIRgyh5bnVJwhg8rgLGeSrkFwB7nC2fOJMQeeD8SmoB/FdKGpUGgAcHdmGk3Q6xlb7ZYEnO4tW1IWcfif9+pwACgWjoXjsZlIZCwaNoRD0ZOBgWgsHHiRj3ifky+ji9oAINPTz/RDYNcv9ACK4WZ/95C/fyvX098f9CfI0LFRLs/5fhIk9zrSN0VQ6x3thpClS3EL/f3UVGjqSmjqanxqamoAvoHOlD4D0mM/4NwuM10PbK51Y7+XLgq1BEciCCYQjUUDJ69eCWkjLwVCfHzsZDQeioZD4RgP3/aOii6KM8s608xsRTIckHmlux9H9PoB0/Bwd7BH6k2sHDOxh3ltHlPSvME7ymTI5tLOcyZFSgaoq043ANcZ7KWXT5mKY20g6piAgyAlJUqARgqjOiqRsZgvMDY2EDdE6FrSSFwbAiUKa8nXXlxYQCbdbaLOVFyDMDgIvemV7m7IFYLBEW64X4A+FvTLdkaxOs2Rx8Aesns+06ypIBzNDZZMweGklTiMqizNDYGLpRbFYrY4UpaQJMERJjskMvHYlQASwTmfAR1aREAUiAUoGZ33eTrVYTNLZEao34b8oJsk3BXNkGZXjJyBF5EMTtqJU9ssY8lnattwJOMoo8C4cpZgIP3RIA5rQZhHXA1d7uQR189T3XFbPK7Mq/EEQZj06iRBVeED0QUfxwkc61uIXgF3Zbgakb4HNERtiNKQMT3xX7djWOW1e4hvEhgysy0JUPV4cw16Ggyd7mxrECbzWGeiEMjZxcLcnjTroMjOTEv5DybA6CL8TJjcHEAFjBEbncGOK6OZJKWzOK+ijGBGmlMCvYr1mB24kzIzT47FRbzhiCPrIuf8PRwpzdBLOWdYHgdfeNIGCNB0c0ei3cBFELjEQhjUHIEJzyjYeQ+SS+AAFRXOJMbvetLM5KLOsB5V34X8w9ybrWUG/pBb0GddwWj2Zl/uquCCKZOHgHGZM6+bc6Rb8AJhYG9CYXRRqDrUC2/gGLw8iItX9SxqTlQn9yddr4W0tRY8tzDcnE2eHWcUq0SI4FIk1yG6gCNl4A0jPe+kLZNbkmWSz3vRlYGuRuOSF8apBdfNpSgUe0ihMG56m4778oO7Lz9Sfvnyg29ts9FdvhlePu4IHTiGNmddd4PahiuLkoUui+fTtA2AHbEIubhwAvt8ziWvUon8c2gX2XSLKVViSe1RCSPDX/EJpB9tKx88EHrtSPmVS2HL7nIzQSOwARlNhManuOgq09nIdeIomDRRAuM42mFI7lMY3x30M7nvXNAz/kPa3LYGx/20h7BANseCQhSXKleCi+OQ3Q5/hSMWhru82xGKGN77a7nuPcNAzFI+SOyxwF6R0WAaokc0NBTWpxHawDQawxAPhbff9Hq1JD4geRI0o+PQqD/DusWUEgBNpjsOFPoirpTOtdKSIZVVrbaETn9UAqOdoVyY3Zd9cT6ie++N8k74zjBw4MFBqjVcQFKvyCGBdBWig+mvMN7exnqyjaQKfsvkod4OLwYd3t7ewwcd+a+J4wRcXZ/D1EDfpPcw5AGGDEkoaquHWFskE7nazhIwgz9sJ9Y28uYHb5DvIgfeoh1Kb5P1y2sWjYHDk83is0yWroEcBL/DYvZ4LLXkHr/8BeJ4ltzCY8hgcDDA06Ixh9O7FNZVj0NQooVXnJG6QmVbEirDjxNvzTjKbdTWXn37nXLxy9FyG41twkqlEevoyRElSMsXbQ4XROQOdyIEFVQLh/SLnfUSzJ10aUgmI9PrIeXbEkPAelyai2zA/XKKexv0DCOoj2TcnRKYkNSXts0TMJF/efTxv/8rVZqZy4PijZ8hydR4XXJD3Kq7dsQbVt1mOdzk4FMtpCoOTOPcDkhXXF/HY0CBq/toR8YeZeg46qY2SzE8R9roWyCdg1Pmj3quD48F7ZLkoGxUfTS+c5fbaOTy17cfX/1OOf3OEHqLFibYJBWLSPM36IDcFotDlY3UkttXxD2sKxkFfO/4yvcOYUsE1/MdvHxbHC+tBoZdHYdrxTvIyNiQeDYfGUYdC4+1h8fC0XZajJ75k/Cnd/vefbdPXv0CJR8WW8rHRJXxXA4bdFd1kSPl76xevfrRN68SDC+9baFKI8RElJEjqiFnfNayxVJL7vyCDFapQ7XpHp/LObLfsZC3CC5wcZSN2K/Q2fVOJvJEj+JoRwzAhKPRMR+SCVPr+aff/+n37/7+D3/CX4hDbKAhvWqV4ZjL5tB7kUjkjbcRzOrVPwD/BPAifxS7E+eTu1PKCjaOjHoo7xZEs5XxscJpI/LrEMFmmTzSizclkxDA29E5aVEsp5eGrImw7e6FBR/8J/jCvgX683d/D/KHP+lpvCBxPCBaVO0VQaCe6RHzTOTqG+Xff3w1lXfeeqMz8t57nbtFnRECki9LuyZVLeAIM5hnci+8ZfELJ1NET9ojuGs9o3jf98FRl5/4Br00MGdWViB8JUVW/+uP9vzhXdkYi4OVkH+InSksiLn1I+Xl5X/+wTs7V8vy6Nvlb/7Lmw+KOiOEpe6U+b6ARPNpPJMxLHcseuHOooVVJPp6Jtrb29kJ/6Pg29V/fR/k3xQzLmQ1r14vmxmdTxp1eMTxk50oMpidO8ESv/OD74vBnuCTDU2OzgARR6bbV+UhBlumGdKvTaSxeYakcXf+pfM3f/mwUxbk8vD7vj7FD1DH9Hr2CCUTiUtgmN2Wn3y0euc7H7wjcvnRB6A/O3c+SslwEA3ERZppJ8qUwnq4DGFeYr7zvx1NYqjq3T/84ff/OTf3/tz7Epq/PPT+Q+8//JfOdmVGghGIIEcz/JRIBpLJwT0frV7994/8WVSZ8kc+AJOz8/9CzCvGAFfEUayOHFaC9UgBg8/HkodlkDFouB6+hbsXpCDP9t/coWQzw7377h/+7ezp9x9+6KGHKBrA8j5sX+1UPTkFLbYAqQFOo0C8EhMDOZfH8+99oDOPvv2o2J9+QJ1UudnjF71XDMlESIKQvU5Sb1u4555dCz6UXXfj68Lae++9d0G6GdDxNZjhzCKZGTTIoBnRc3MPI5sPP0QuoDC/QUgqMjZSH1eHLjIAvcMQpWMwg29dfrO8llqXjyQzgy+Plu++XN5ITQ2EyJH4SxGd15NaEVk4vMlHbDuCoGzIv133wOd7d8kdyvLV/1oA63Y4IO1I841NipoEYtuivR9CbwI4p4DLQw9BT+pMJkNZ1nojcR8XjxhIzAMpk/uirvyHfQhlpwSGEHpzd/truh+yZDBiXhuJs+xAhE9ZEaU6gaxRekLi3rVUbRYWYPvjjz/eJfVtjstGOLewDjOElm43pB3m1EfHqKIZINPRiWjmAMrDCYOjIsPJZDghYDAQp81c3jZveO+N8kGwwasfffRxwEIt8c4Pyl0xw3v/UkvIRHltXGDiEW9WMokpUCADJO7dtSDK3ffAx48XFLGYK+dQVUaxmc1uxY9tFowTFDtSySCav4BLOv2w7KHUT2gil9Tl1Wln4t6INkrIlDtmIpG/DpZ7fvLRRzv/XP7nP79d/sHOjz56/IPdjzgChshfL5MB83kt/GgmR2+yKcKIXQTM3Qsyml33fnyvT3HTcZah6+zCWczJ4xycSxVapyHT+eFf5ubmHlI472QyOOQoWmAtWmBIJn2GSKTcZXtw8MerP9r5Dx/8+YOHdq5+9oFBD7PtctQQge4kWeBILgusnDVf+BjMzN0K2bVr7VqfrDMcKs11iTttfkFCaym4TCZDo7wPP1TENEBGFbOayX3uoteOTOEtxObd4fd0b15mTpxwOJm+n3wE8d4efAzUiU849pHLV96LlLshnBGuaHN5bU5hZcD2Ldyzdm0SmV27FpSjMebr6k04cJv2hw6zHEilkOnoJSK+UVGRoXaGPaJLRHrMI55P33jLw+g/+ezzT74QmB9/9FGf0Hfik2ufXdMz7OW3/nj1jW1wmF6K9Dqz+BSHW1Hnu3etRRa7KJJdk+TtbuUwlet63FNtJk3jIH6U+qdNffnGx5IF8u4xVWdG3yRAdiCn2nrGU/72blDPL070ffH5tz777FWmr0/4BDa+vAZ4QOW3QUrlEPS2fLIDpRKwu5DMPf9O8eyaLP+UvPsUaGyLv/OMqXVk+dpmFucS2cwrV4WFdp+PCy+wPtVCNbEuk2LPAOfEWMjSEf0XoDEnTpx49ctPGD2oC2wCqGu4SI91Wxx5ZZQcozRBPjQraz/993somrWfriUbPuXPzXk/ykwSR6auRMVtEb/NbAy5KEj4QDgaVT09Sux/lsQohDiXzfZ9C+XzT/qufXHiS6DyJXz67IT4HD1IyqRRiPR3xoqlKxWdkgEcomci20lksjyQJL2Qm1Yzk+HkccvMJdOQHhf2qsYCxJFbv7w4xCcNQzCff4vKFyc+OSFuf9nHSdKeeeQqISq74VuLZMA77boHZC3lpCIDMebiBrE4JsuMhSjiEZhr02cicnRsXE8CFEBCH64IH+kDLcTuJymZcFjsTtqYREb/qkjmW30ypGtSKg4+W5t2tFMtqgsl6gwkBQgGcqg0OpPkQnKKuzZn7xMjKmJQJSG2lT6vgnzEXIpkVPQYxc9whW6K0vRJZD75Qtr6QoTKCT55WiXdU10kUXfuu2lnugfR3CuTUV30xZpgTx7PrhTjR3wLh33tC+04BNzuaw873O2+6MIBH2z68PP4eBRsMWziD+RpEH9iVkUatNN/KfL4/BNZeyQyTEhaSJO6Wl1VcaUsEDKgLR/fc8/fJDJ3q2Zps7iQdJIXSBu10WjzomOx2BVf+GRsbCy2EI7F4GM4GgN/HYtFY+Mno0UdNOgAABGoSURBVGMnwXnHxhb0ysmDT+WZuDBHZ070MhBJPhehsbJjUszE5SbD0u50jyiUzIL6kMWRyfRwsbS1gDcf67P5uPF2nyQL4/hq8/nC4cROH6tXDgG65FVFV9vpkiL2RDIZuTP5rkoHe7M+siYpo7pbUhpigaXOpOwOiySTz2iX/GQBUBpcqERNC7zpWcnQ6IkB1uNOjlobRl4FBfsS07cBgVpw/edJZETPJLCJGf8/EtuVHxk9uzZFFlS3MSzSzqiOttWYGJZttNkbQewMY9oL74S7NDbjYcWAJdfsMEcWS8nikCwNCWrSdSexMylXiXRkv8YWlXnUS0ojC3impLYuKqdUebLG5cudjPM/GguXG0uWL29s/Q9870IUnKharCffODJp6HVUsbKIJc4+qTu9mrKyKO3jxhSifjqlnuSUakki41hU4qSaC3Yai6sZ0/Ka6lZgYK1q+VniK9pOiPry5M4lDdcnplZ0fJz4bhYyyS+I4lz7oq+P9iXG16lYjWbPTkZhxxhC5t4kWas2wMzi/hKoKlxqLKlfXmVa3ghkTE5jVZO1tbW1huOo0RCFzJPmVpvkGzEYR29isa8uiuuuwEjpmb7PPz9BJgwgJRDYqFe1gjG7qA0qUMURzr/9Pyp/+xjI+ATVstbFDUOoySw3rVi+AsisajVa29xdVXV1bcsbGeVMLPSrfMhbkhcx6gWzYnGnF1e9kggal3RSAyMI4RnlguDRnBdAZYL1et+nf/vb/0rI344+bWNZRfMW67TJQB7qBZjxRjAzbUYj6AzL2kg0C31rhZpMXuv0FM+3o4Iea1SxIDjCB6I+Ei1TKhANRANegzahVzmMjMJh0tsxWNZxYBRkksrB0QMHGk0qMotMDmpZqF7fdyZ+Mw51b/wPJ2NfvrymqIo58fmXn7+sqa62lpiSyIDWuJlM84IMfZpk2jokbjsgaLSBK2NhnD1jWd/C2NSAlg9cmXpJAnM0j7yYxp+kInok43Q1HpDF6XI6TXZWXH6Gzn+RqbYL15gJD/ziF7+BC2erYTnGVGOr6RIg2vhib01NDThvUqDK01iyDlvYPO5030LvOdgh60QkoAtFtJGruqtXrw5E8HEUEW18zC2ulOafz/JAzYSYZTMCZHwmk8npdOKkkNPp6DLZu7q67Ky49EhYdGdCFUPb99gvjt9FV99yZDXZNUj1pKkavcJr0z1ZVxS6PBn+igBcAY9shrWBKHSf0Jh4h6lBy8ejJ6NXaWIAXUmfzx8iAO/UZd9L/woJS7RHr9+/lzz0ai+DOzlWv5/8LRK7XR1f5SE00uOEZ48fv6sPR7BxnSl37bPPPlEdltxHOXOqbpKmuD2O5P0JEZjaIxKaaCwci0ZPBvDmUl08FHXPXAkvBEJxvPPLk+9zLD0c+8T+J/bv37v/iSf2PrF3//79DHyCPXv3PkG+eILZt9+Em3bxLrJFCDEggGP82PHzP+kT8OfB//rsv75Q/yWMVA42s8WWfCrWkXGNDyOexv88dcyR2IFY4EAoOmaIQ8IVc1+NXn1xLBDiIxHvYUfe6y8hW9nf9QRFsfeJ/V179zL7GdiCT8AKdzL7gR18sFsyr0TPIMTA69F37ll9/tTOx//zk2uf/derHKO+wyV5PgxPYqs117qllQgcZ3NYxBWDmdfmok6ajxA2hiszsbghHInw0cDJWGzqSmwgEDFE+M5RlhHyeuA+CoYQwJtFH8dywl74p+fwcX8CbLEYEAh9mNyz/to8/1BIQuThJfzDIX0nXu3vfzWID5ZVXbdMs1hAQxaglN8Z/QcJG7S4V6MRsMWx6MxYjI+DQdb2TubxSHmFsGYyjMhI1dWnS+pw3PF6prVVkaFeSC2YyT7zCaGPLc1dk5kF79g+3KElhncAERni2kAI/3rFoYPu/G4ISEjyDV/phGPyGNFNI4rJYY4+jDj19JknCq9n3g/HRh0HD/d6ya39uggqi6730GQtutjFPinXkRsNWet/PRVVhvt6faouqtZHfx1CTyD4a0cnnz905MiRQ4c/HZWXkC76wdMuS840IuOa2BySow9yi44EFiHycPtXELJ2M0tIzmW9lyWruLOP67kXb9bzEey6aPbxn/66HjctiTurFbFluXMsp2RdxZaD29chQs5b97ILmym85HDZ/Ve6quQetvQluL9ayf9D4kg/bMQ5rr8nySVnaL/Lwv13dKWvWUA3XOaUZwzYXJj0f9Xa25KWnpHTQQrg+Irl/s8J58ZbmsTAisN7fL6G9ZxEXCmKx1osWf4y0U0orM1lMROxWFwpWd1XKFf195A4tyevcc1viLjxT2mJf1LLcaMrc7MJZ7Pl+WfYlmRJlmRJlmRJlmRJbpiwS5JemMIlSS9MwZKkF0azJOlliUwmWSKTSSQyRdZia3EBbhUUFxdbK2Gjshh3lMIr7kIpwn3F+B3uLi4tKJL2azRlVvhZmVwu+YjliT8t1ohlV2IZUvGl5Cs8Dooi5eIJSkmFiovLErvxt4kTYGWL5BpqyvAnleJ5ymhlSWNwk5ZdiuXR9pGNMvHoygKxNkVybaA5ZQoy1iqnybSiGupUWr3CZGpssmqsjaau6oLi1q6upsIuExFnyYouU9cqaGVRFW5US/sBQEujyVTTUiyBLqyBj4VFGqN4SFc1Nq7Q1FVfUtPVtaJYU1QD+1rJt3BcWVtXVz38uBhP0AqtXuk0dTWVFrSZumpomcWFcIJ6KBEaCpV1VgFPqOHKAk1pUxeWKp6nqY2U6VxVWlCA9W4rK20yda0ogl93tUCTG8hGHa0W/K6RnK8SToeNo3vrKmUyDfUktrEXFpQV2slmq9VoYpiVBVb4pq5NjH1syxvh1WnF8mGjvlqKiTTFdXSrijajqImug2iqLJHippV48aAg53InnMioKYbiq1eIv28pbqHlWnHpT2ODpmAlC+Vby9o4xmQlJdaJR1ZqihrJZg2pYVOpprgVDi0xieeRK+ssK8PN1uLKJjwYm4XXtABHm5qqpIOW4xpwqA28La+R6lpVJJGpxNOabFAna7GToX+3vaUkQaYQ9tntdtZEyLB4bbtEMrjf3qXRQMl22MciAGiXDUNI2FWNZOAIG1uNZApFMkxhmUSGteNxRpEMloM1JWTsxrI2lpIhn3HA215mXYV1wDaX1GPDyVWqK3FiUVBHJAOVwvZZC7HtxgSZmgZNWQsnkiFH1yAZZmUZIVNP6gIvCZ2x1iD1QthdBoXZW1bCaeqXq8g0lq4EMTbSy08qSsiYNLgfr6jdiN8S3EVwYufKNjhb3XLQtGo8hJgKmcwqq0SmVVNoolcayJQV4iScvoSSYAorJTKoF86VLVBik9HOcFX4S3tJFTaZ6Fmh0Qn6hCcqQMYFuLy70Yhk2JVFMpkuI1UCQmYF1ry6hDAsQjLG6pUabG31yoQFRrVsK22oNzVWQykrjMVN2AI1GSNGP6QTMXWVpS2MRMaK+4lCN1Q22Z0EdzHUu6nYCK8rgIy9GA9Rk3EaZTJWK1RzFSVT2kRm+TUi+lVWiYyVlgiVWQVa2FVSZoU2ozI4Gwqq7QxbjWTaKuE8WDVnQ6kGVa+Q1NYqk2EaNMWrJDKrsOYaI+5vNBIyYOThNHVFBQoyUNmmSjBtDch3FemZyWQaiD0iZOqtRVUJMsQKtBJVLSglTo2SqcRKUDKSw0qQYYqtEpniogQZohr4W0rGWSKTgWq0lGLFCRmjpgHI4EE26HF6xlTcgGTQpxAy1oJqTiJTX5Ig01ZmdMpkSLUIGbaYkiEXoK5S4bVxR2MJsTiETGkTyzZmJuM0WuvVZPBacw0FEgGRzIosZKqM6cg0QLdehTWgZLhSNZniVSzbmiCjaYD2WLHKjQ2ZydgVOgMns6chwzQ1ZCCDPoOpapDJaEqNRmL5K40lK0QyyxsaKgkZlmFLrE60gYRMSUMDmJYGEwIrSE+mxNhQrCZjZ2pK0pHBcuv00A4kA5WtKlSSqWwoWb68wZogg4atDTtjK9GZQmODNZkMFNIikgHTW2OEAlmRDNS8jJCxgwHJQEZD7H0rRAgiGcn4NDY2dlEy9sZGZ1UlkoGGlRbY8Q3JsLAf4oFScK9g+ErTkcFDVhWpyKwAumnIFEC5XcDEZEQyXU6mZqWSzEonlFRnTJDBhlShh2qqBDJ6+LrGSsiUlNThlcLTmZhWkYzdBtexiXZXOKUJGtdShkjqwXBlIqNB28ZAqJVERgwRCun7qmIkg60uJG9SPFMPdScBjWllaRoypANaVWSg9i3pyKxEJYSrSsjYqyDAUpIh1VDYGU1xFZoRJ8O1lTU4abxjRDKs08mKXruxnnFKZGoYzliFb3I8U1eJZFoYrjAjGYpmhTUrmRWETB3HrGpi2NYEmRpS9yZEoynIi0x1F7PKmUoGW0XtWxmSKYKTZSVT2aIHv9LF2DUFIhnOSN0mnrKoFE/XAv1TJANVLgRQ9clk4LuqzGQ0DSskDwdkykQ709TSUkPJONtaWgqJ14agoqaV6aoT7UwL7ic9EuPeemsqGRsc0qb22itXMKY0ZNA1tS5Hm1+EZIBRvZJMQUu9mkwBBLT2Yj14aQ2Q4ergRKUymapicjpo9ipKxgbnqHIy9SKZejh6ZQExMDUMGo1MZAoQjclIyJS1QCaC16660ijHM6WlBcQCAytQyEaJTAPux99ripv06BdTLbC1tLRMbYELCyHUTCWDESeOM4LJQzIlqxi7yjcZ1V4b9BoaVEiuB/FNRXAeYmeqq9BflZHTNTJdHCVjZJl6O1MnklkFNae+CcI3DH7T+qaS4uqCAiucZmXueKapFaJvprVO6bU1xhKI/pHtCms+XruNOstkMmKXwKgRyRhJCpQ5ntEQL19FAm+11zZCzey0N5XU0Q4PZOAYO8e01SR77cpqUps0ZIjhM5K0sg7JWLOTKZQiggQZEpwU0JhUJmPNHOkV0hQ2hYy0tsBUQsgUmTKQKdEYCRkMJmlamRTPQHyib6nE0xlJZETIYLWgNilkSmnSk05nMM4pK8KkrAVtYAkmJMmRXkkRCCFTgg+GWSmRMRbDfuI+GxqqRIJY4daSEgzbMpApapHJGEvwaCTTUIbBTwk22kjIkIDSJGlhVUlJI5arh/7ZABeTLRKzIBYMHSFjLSoqriRkrI2ib3IaSdRLyGBKhffMimSMUHFigUtpIp82Bq5HIw4V1Jdp0Iyuwq6uzrVNVa2trVUlhAwZRhDJ2Ml+jIHZpjpWzChRebhV2KyWkvRkMCKiZGqqVsApC0kfIC8adNuF1WhniDUlZBABS0psw5Y6W+3kUNR2egK0wKugKq1tLZItJxml00gyGUJGY0UHWyKSacSa12EgU1pG9CqtnVnJSpEJzbjgbAVGFRkaLeAoRJOR5BJVivEZTkwbQM9pqVbxY2NRejJtZWhs5fEZpp5AKWklxhSbXodkoOV2qb9KJqiGKAWKvgUNKEmvjInvxawdh2bstDeRxhEy1dikqhJFPEPHZ0qpz0/rmypbiA2qqSwgektiNrT7SSNXlAxm4q1GNZkCDWFhaqPFFmjIKFBNWUEJ0XpRytpE+9VWhmolk5Ei1xoy3oLQWoGMrYEoMyUjnoDUsA4XxtmbikUDB3EWTU8oGZodaFgaAAE1JI1k2Go02C3GVDJk2ISQqU/x2pUFTVVVbWSgtLiwrqqpqAwUuKqqWlPWUlVVuLJKFCscBZ0aXkrbqqqaNNJ+HHKFA5uk9ADy+RZaXhF8K2eaGiiozgrlrtRoqvFnLeTXbVbQWvimuI6UjqdsgaKhigVwlroydYmQ2VfXVdVVE96lTfh7HK6uE6uClYWflGFZ1aQQLK8Jv4crAy/4k8I28WhSmwJy+iogQlpboCIDRRcViePbZZVFpIGVRWTku6gI2kelEo+CH+JLQREcJe4vUv5M0o/KSlIe/ioh+ImWS97KyK/l42jpuBcuDPldgeLniRoWwJcF8k46nlIpVqVAPGNlYjNRXhl9KSooEI8uFWtTIDVCLE2zNKuSWZbIZJIlMplkiUwmWSKTSZbIZJIlMplkiUwm+f88KDkDPnkowgAAAABJRU5ErkJggg==',
      tags: ['WordPress', 
        // 'PHP', 'MySQL', 
        'SEO'
      ],
      type: 'web',
      demoUrl: 'https://thegovscheme.in/',
      githubUrl: '#'
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="portfolio">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">My Portfolio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A showcase of recent projects demonstrating expertise in web and mobile development
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <div className={`p-2 rounded-full ${project.type === 'web' ? 'bg-blue-500' : 'bg-purple-500'}`}>
                    {project.type === 'web' ? 
                      <Globe className="text-white" size={16} /> : 
                      <Smartphone className="text-white" size={16} />
                    }
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.demoUrl}
                      target="_blank"
  rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </a>
                  {/* <a 
                    href={project.githubUrl}
                      target="_blank"
  rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-gray-800 font-medium"
                  >
                    <Github size={16} className="mr-1" />
                    Code
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {/* <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
            View All Projects
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Portfolio;
