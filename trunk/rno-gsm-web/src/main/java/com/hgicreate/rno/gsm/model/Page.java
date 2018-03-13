package com.hgicreate.rno.gsm.model;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;

public class Page {

	private int totalPageCnt = 0;// 总页数
	private int pageSize = 25;// 每页记录数
	private int currentPage = 1;// 当前页数，从1开始
	private int totalCnt = -1;// 总记录数

	private int forcedStartIndex = -1;// 如果这个值大于0，说明直接使用这个值，而不是使用currentPage*pageSize这样计算得到
	private List<Map<String, Object>> data = new ArrayList<>();

	public Page() {

	}

	public Page copy() {
		Page another = new Page();
		another.currentPage = currentPage;
		another.forcedStartIndex = forcedStartIndex;
		another.pageSize = pageSize;
		another.totalCnt = totalCnt;
		another.totalPageCnt = totalPageCnt;

		return another;
	}

	public int getTotalPageCnt() {
		return totalPageCnt;
	}

	public void setTotalPageCnt(int totalPageCnt) {
		this.totalPageCnt = totalPageCnt;
	}

	public int getPageSize() {
		return pageSize;
	}

	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}

	public int getCurrentPage() {
		return currentPage;
	}

	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}

	public int getTotalCnt() {
		return totalCnt;
	}

	public void setTotalCnt(int totalCnt) {
		this.totalCnt = totalCnt;
	}

	public int getForcedStartIndex() {
		return forcedStartIndex;
	}

	public void setForcedStartIndex(int forcedStartIndex) {
		this.forcedStartIndex = forcedStartIndex;
	}

	public List<Map<String, Object>> getData() {
		return data;
	}

	public int calculateStart() {
		if (forcedStartIndex > 0) {
			return forcedStartIndex;
		} else {
			return (this.getCurrentPage() - 1) * this.getPageSize();
		}
	}

	public Page newPage(Page page, List<Map<String, Object>> allData) {
		int startIndex = (currentPage - 1) * pageSize;
		int totalCnt = allData.size();
		int queryLength = (pageSize + startIndex) < totalCnt ? (pageSize + startIndex) : totalCnt;

		if (!allData.isEmpty()) {
			for (int i = startIndex; i < queryLength; i++) {
				data.add(new ArrayList<>(allData).get(i));
			}
		} else {
			data = Collections.emptyList();
		}

		page.setTotalCnt(totalCnt);
		page.setTotalPageCnt(totalCnt / pageSize + (totalCnt % pageSize == 0 ? 0 : 1));
		return page;
	}

	@Override
	public String toString() {
		return "Page [totalPageCnt=" + totalPageCnt + ", pageSize=" + pageSize + ", currentPage=" + currentPage
				+ ", totalCnt=" + totalCnt + ", forcedStartIndex=" + forcedStartIndex + ", data=" + data + "]";
	}
}
