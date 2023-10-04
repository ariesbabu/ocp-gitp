---
title: "Getting Started"
sidebar_position: 1
slug: /
lastupdate: git
lastupdateauthor: git
---

# Getting Started

Welcome to the Openshift Container Platform (OCP) on Nutanix HCI workshop.

This workbook accompanies an instructor-led session that introduces OCP on Nutanix HCI, Infrastructure lifecycle management for OCP using
Nutanix Calm, OCP using Nutanix HCI storage (volumes), and many common
management tasks. Each section has a lesson and an exercise to give you
hands-on practice. The instructor explains the exercises and answers any
additional questions that you may have.

Lifecycle management for kubernetes and storage yet another silo within
IT, introducing unnecessary complexity and suffering from the same
issues of scale and lack of continuous innovation seen in SAN storage.

Nutanix believes there is no room for silos in the Enterprise Cloud. By
approaching Infrastructure and storage as an app, running in software on
top of a proven HCI core, Nutanix delivers high performance,
scalability, and rapid innovation through One-Click management.

:::info

-   **Installation** - choose one of the following
    -   **OCP: IPI Installation** - 60 minutes
    -   **OCP: NCM Installation** - 60 minutes 
    -   **OCP: Assisted Installer** - 40 minutes
-   **Nutanix Storage CSI** - 30 minutes
-   **OCP Workload Backup/Restore** - 60 minutes 
-   **OCP and Nutanix NDB** - 60 minutes
-   **OCP Serverless and CICD** - 60 minutes
-   **Optional Labs** - 30 minutes

All lab durations are estimates. Actual duration will depend on your familiarity with OCP, Linux and kubernetes concepts in general.

:::

## Lab Environment

The labs are designed to run on any Nutanix AHV cluster provided the following are present:

- AHV IPAM Network
- DHCP Scope
- Gateway
- DNS server (this lab uses a Microsoft DNS configuration)
- IP address allocations for the OCP nodes and other infrastructure elements
- Internet connectivity (no dark site setup information is documented yet)
- A Linux VM (any cloud distribution is ok. ``CloudInit`` file is provided in the [LinuxToolsVM](/docs/toolsvms/linux_tools_vm.mdx)) section.

## What is new?

This workshop has been tested with the following software versions:

-   AOS 6.5.2.5
-   Prism Central - pc.2022.6.0.3
-   Calm 3.6.0

## Agenda

The lab is designed to take your through installing OCP cluster on Nutanix HCI, deploying workloads, and doing optional labs.  

1. Choose one installation of the OCP cluster methods:
   -   OCP IPI Installation
   -   OCP on Nutanix NCM Installation
       -   OCP: Deploying OCP Cluster
       -   OCP: Scale out and Scale in OCP Cluster Worker Nodes
       -   OCP: Deploying Nutanix CSI Drivers for OCP Cluster
   -   OCP Assisted Installation

2. Setting up Nutanix Storage CSI
   
   -   Nutanix Storage CSI  
   -   Deploying OCP Image Registry with Nutanix Objects Store as storage

3. Workload Backup and Restore
   
   - Deploying Wordpress application on OCP
   - Setting up Nutanix Objects as for backup target
   - Deploying Kasten K10 backup application on OCP
   - Backup and Restore Wordpress

4. OCP and Nutanix NDB

   - Using NDB deployed database as a datastore for a microservice application

5. OCP Serverless and CICD
   
   - Deploying serverless application on OCP
   - CICD of serverless application on OCP

6. Optional Labs
   
   - Deploy second OCP cluster using NCM
   - Deploying IDP for OCP