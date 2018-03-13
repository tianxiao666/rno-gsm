package com.hgicreate.rno.gsm.controller.query;

import com.hgicreate.rno.gsm.mapper.query.WorkOrderBatchMapper;
import com.hgicreate.rno.gsm.model.Auth;
import com.hgicreate.rno.gsm.model.User;
import com.hgicreate.rno.gsm.repo.AuthRepository;
import com.hgicreate.rno.gsm.service.usermanage.UserService;
import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.apache.poi.ss.usermodel.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.MultipartConfigElement;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.security.Principal;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map;


@RestController
@RequestMapping("/workOrderBatch")
public class WorkOrderBatchController {
    private static final Logger logger = LoggerFactory.getLogger(WorkOrderBatchController.class);

    @Autowired
    private MultipartConfigElement multipartConfigElement;

    private WorkOrderBatchMapper workOrderBatchMapper;

    private AuthRepository authRepository;

    private UserService userService;

    public WorkOrderBatchController(WorkOrderBatchMapper workOrderBatchMapper,
                                    AuthRepository authRepository,
                                    UserService userService){
        this.workOrderBatchMapper=workOrderBatchMapper;
        this.authRepository = authRepository;
        this.userService= userService;
    }

    @GetMapping("/page")
    ModelAndView index(Map<String,Object> model, HttpSession session, Principal principal){
        if (null == session.getAttribute("user")) {
            // 获取用户对象
            String username = principal.getName();
            User user = userService.getUser(username);
            logger.info("在 Session 中添加用户：" + user);
            session.setAttribute("user", user);
        }
        File file = new File(multipartConfigElement.getLocation());
        if (!file.exists()) {
            file.mkdirs();
        }
        return new ModelAndView("query/workOrderBatch");
    }

    @PostMapping("/processWorkOrderBatch")
    String processWorkOrderBatch(MultipartHttpServletRequest request, HttpServletResponse response) throws IOException {
        User user=(User) request.getSession().getAttribute("user");
        if(null==request.getSession().getAttribute("user")){
            response.sendRedirect("/login");
        }
        try {
            Iterator<String> itr = request.getFileNames();
            MultipartFile mpf;
            while (itr.hasNext()) {
                mpf = request.getFile(itr.next());
                String path=multipartConfigElement.getLocation() + System.getProperty("file.separator") + mpf.getOriginalFilename();
                File f = new File(path);
                mpf.transferTo(f);
                InputStream inputStream=null;
                try {
                    inputStream= new FileInputStream(f);
                    Workbook workbook= WorkbookFactory.create(inputStream);
                    Sheet sheet = workbook.getSheetAt(0);
                        String authority=authRepository.
                                findByUsernameEquals(user.getUsername()).
                                getAuthority();
                        Map<String,String> processItems=parseExcel(sheet,authority);
                        if(processItems ==null){
                            return "处理失败，无可解析数据！";
                        }
                        if(processItems.get("user")!=null&&
                                processItems.get("user").equals("unhandled")){
                            return "处理失败，请等待普通用户处理完工单再进行审查！";
                        }
                        for (String order : processItems.keySet()) {
                            if(processItems.get(order) !=null
                                    && ! processItems.get(order).trim().equals("& & &")
                                    && ! processItems.get(order).trim().equals("& &")){
                                if(authority.equals("ROLE_USER")) {
                                    String status="待审核";
                                    String handler=processItems.get(order).split("&")[0];
                                    String handleMethod=processItems.get(order).split("&")[1];
                                    String handleResult=processItems.get(order).split("&")[2];
                                    String admin=processItems.get(order).split("&")[3];
                                    if(handler!=null&&handleMethod!=null&&handleResult!=null
                                            &&admin!=null){
                                        if (workOrderBatchMapper.ifExitsThisOrder(order) > 0) {
                                            workOrderBatchMapper.updateWorkOrderBatch(order,handler,
                                                    handleMethod,handleResult,admin,status);
                                        } else {
                                            workOrderBatchMapper.insertWorkOrderBatch(order,
                                                    handler,handleMethod,handleResult,admin,status);
                                        }
                                    }
                                }else{
                                    String count=processItems.get(order).split("&")[0];
                                    String status=processItems.get(order).split("&")[1];
                                    String admin=processItems.get(order).split("&")[2];
                                    if(status.equals("退单")){
                                        status="已退回";
                                        count=((Integer)(Integer.parseInt(count)+1)).toString();
                                    }

                                    if(status!=null && admin!=null){
                                        if (workOrderBatchMapper.ifExitsThisOrder(order) > 0) {
                                            workOrderBatchMapper.updateWorkOrderBatchAdmin(order,
                                                    count, status, admin);
                                        } else {
                                            workOrderBatchMapper.insertWorkOrderBatchAdmin(order,
                                                    count, status, admin);
                                        }
                                    }
                                }
                        }else{return "处理失败，无可解析数据！";}
                    }
                } catch (InvalidFormatException e) {
                    logger.debug(e.getMessage());
                    return "处理失败!";
                } finally{
                    try {
                        if(inputStream!=null){
                            inputStream.close();
                        }
                    } catch (IOException e) {
                        logger.debug(e.getMessage());
                    }
                }


            }
        } catch (IllegalStateException | IOException e) {
            logger.debug(e.getMessage());
            return "处理失败!";
        }
        return "处理成功!";
    }

    private Map<String,String> parseExcel(Sheet sheet,String authority){

        Map<String ,String> result = new LinkedHashMap<>();
        int rowNum = sheet.getLastRowNum()+1;

        for(int i=1;i<rowNum;i++){
            String order;
            Row row =sheet.getRow(i);
            if(authority.equals("ROLE_ADMIN")
                    &&row.getCell(12)==null
                    && row.getCell(13)==null
                    && row.getCell(14)==null){
                Map<String,String> map=new HashMap<>();
                map.put("user","unhandled");
                return map;
            }
            for(int j = 0 ; j < row.getLastCellNum()+1; j++){
                Cell cell0 = row.getCell(0);
                order = cell0.getStringCellValue();
                if(!order.startsWith("GMCC-")){
                    return null;
                }
                if(authority.equals("ROLE_USER")){
                    String [] treatCond = new String[4];
                    if(row.getCell(12)!=null){
                        treatCond[0]=row.getCell(12).getStringCellValue();
                    }else{
                        treatCond[0]=null;
                    }
                    if(row.getCell(13)!=null){
                        treatCond[1]=row.getCell(13).getStringCellValue();
                    }else{
                        treatCond[1]=null;
                    }
                    if(row.getCell(14)!=null){
                        treatCond[2]=row.getCell(14).getStringCellValue();
                    }else{
                        treatCond[2]=null;
                    }
                    if(row.getCell(15) != null){
                        treatCond[3]=row.getCell(15).getStringCellValue();
                    }
                    if(treatCond[0] != null || treatCond[1] != null || treatCond[2] != null || treatCond[3] != null){
                        result.put(order,treatCond[0]+"&"+treatCond[1]+"&"+treatCond[2]+"&"+treatCond[3]);
                        treatCond=null;
                    }
                }else{
                    String [] treatCond = new String[3];

                    if(row.getCell(15)!=null){
                        treatCond[0]=(int)row.getCell(15).getNumericCellValue()+"";
                    }else{
                        treatCond[0]="0";
                    }
                    if(row.getCell(16)!=null){
                        treatCond[1]=row.getCell(16).getStringCellValue();
                    }else{
                        treatCond[1]=null;
                    }
                    if(row.getCell(17)!=null){
                        treatCond[2]=row.getCell(17).getStringCellValue();
                    }else{
                        treatCond[2]=null;
                    }
                    if(treatCond[0] != null || treatCond[1] != null || treatCond[2] != null){
                        result.put(order,treatCond[0]+"&"+treatCond[1]+"&"+treatCond[2]);
                        treatCond=null;
                    }
                }
            }
        }
        logger.debug("需更新的内容有result={}"+result);
        return result;
    }



}
