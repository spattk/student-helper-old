'use strict'
const _ = require('ramda')

const util = require('../util')
const utils = require('util')
const db = util.db;

async function createProject({
    emails, studentId, groupId, projectName, domain, description, status, githubLink, videoLink, goFundMeLink
}) {
    console.log("Create Project Handler");
    if (!emails || !studentId || !projectName)
    {
        console.log("Insufficient Info");
        return util.httpResponse(400, {
            message: 'Insufficient Info!'
        })    
    }
    
    const projectId = util.generateRandomString(5)
    const emailArray = []
    for (var email of emails) {
        emailArray.push(email);
    }
    
    try {
        await db.query("INSERT INTO projects (emails,student_id,project_id, group_id, project_name, domain, description, status, github_link, video_link, gofundme_link, upvotes) VALUES (?,?,?,?, ?, ?, ?, ?, ?,?,?, ?)",
                [JSON.stringify(emails), studentId, projectId, groupId, projectName, domain, description, status, githubLink, videoLink, goFundMeLink, 0]);
            console.log("Query");

    } catch ( err ) {
            console.log(err);
            throw err;
    }
    return util.httpResponse(200, {
            message: 'created project successfully'
    })
    
}

async function showAllProjects({}) {
    console.log("Show All projects API handler");
    try {
        const results = await db.query("SELECT * from projects");
        if (results.length == 0) {
            return util.httpResponse(404, {
                message: 'No projects found!'
            })
        }
        const projectArray = [];
        for (var result of results) {
           const project = {
               projectId: result.project_id,
                projectName: result.project_name,
                description: result.description,
                domain: result.domain,
                status: result.status,
                upvotes: result.upvotes,
                github: result.github_link,
                video: result.video_link,
                owners: result.emails,
                studentId: result.student_id,
                group: result.group_id,
                funding: result.gofundme_link
            }
            projectArray.push(project); 
        }
        return util.httpResponse(200, {
            result: projectArray
        })

    }
    catch (err) {
        console.log(err);
        throw err;
    }
}

async function searchProjects({},ctx) {
    console.log(ctx.params);
    const projectName = ctx.params.projectName;
    console.log(projectName);
    try {
            const results = await db.query("SELECT project_id, project_name FROM projects WHERE project_name like ? ",[projectName+'%']);
            console.log("Query");
        if (results.length == 0) {
            return util.httpResponse(200, {
                message: 'No projects found!'
            })
        }
        const projectArray = [];
        for (var result of results) {
           const project = {
                projectId: result.project_id,
                projectName: result.project_name
            }
            projectArray.push(project); 
        }
        return util.httpResponse(200, {
            result: projectArray
        })

    }
    catch (err) {
        console.log(err);
        throw err;
    }
}

async function likeProject({projectId}, ctx) {
    console.log("like project handler");
    try {
        const result = await db.query("SELECT upvotes from projects where project_id = ?", [ctx.params.projectId]);
        if (result.length == 0) {
            return util.httpResponse(404, {
                message: 'No projects found!'
            })
        }
        else {
            const result1 = await db.query("UPDATE projects SET upvotes = ? where project_id = ?", [result[0].upvotes+1, ctx.params.projectId]);
            return util.httpResponse(200, {
                message: 'success!'
            })
        }
    }
    catch(err) {
        console.log(err);
        throw err;
    }
}


module.exports = {
    createProject,
    showAllProjects,
    searchProjects, 
    likeProject
}
